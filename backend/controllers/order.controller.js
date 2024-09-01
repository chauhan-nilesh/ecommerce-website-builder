import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { stores } from "../models/store.model.js";
import { orders } from "../models/order.model.js";
import { customers } from "../models/customer.model.js";


const orderPlaced = asyncHandler(async (req, res) => {
    const { storeId, custId, email, name, phoneNo, address1, address2, state, country, pinCode, paymentMethod, isCouponApplied, discountValue, coupon, totalPrice, cart } = req.body;

    const store = await stores.findById(storeId);
    if (!store) {
        return res.status(404).json(new ApiResponse(404, "", "Store not found"));
    }

    const customer = await customers.findById(custId);
    if (!customer) {
        return res.status(404).json(new ApiResponse(404, "", "Customer not found"));
    }

    const orderPromises = cart.map(async (product) => {
        const ordered = await orders.create({
            store: storeId,
            customerId: custId,
            email,
            name,
            phoneNo,
            address1: String(address1),
            address2: String(address2),
            state,
            country,
            pinCode,
            paymentMethod,
            totalPrice,
            isCouponApplied,
            discountValue,
            coupon,
            product: { ...product, soldPrice: (product.salePrice - (discountValue / 2)) },
            status: "pending"
        });

        store.orders.push(ordered._id);
        customer.orders.push(ordered._id);

        return ordered;
    });

    await Promise.all(orderPromises);

    if (isCouponApplied === true) {
        customer.couponsUsed.push(coupon.toUpperCase())
    }

    await store.save();
    await customer.save();


    return res.status(200).json(
        new ApiResponse(200, "", "Order Placed Successfully")
    );
});


const getAllOrders = asyncHandler(async (req, res) => {
    const { custId } = req.params;

    const allOrders = await orders.find({ customerId: custId })

    return res.status(200)
        .json(
            new ApiResponse(200, allOrders, "all orders fetched")
        )
})


const storeOrders = asyncHandler(async (req, res) => {
    const { storeId } = req.params;

    const order = await orders.find({ store: storeId })

    return res.status(200)
        .json(
            new ApiResponse(200, order, "Orders fetched")
        )
})

const getOrderData = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const order = await orders.findById(id)

    if (!order) {
        return res.status(200)
            .json(
                new ApiResponse(400, "", "Something went wrong")
            )
    }

    return res.status(200)
        .json(
            new ApiResponse(200, order, "Order data fetched successfully")
        )
})

const updateStatus = asyncHandler(async (req, res) => {
    const { orderId } = req.params;

    const updatedStatus = await orders.findOneAndUpdate({ _id: orderId }, {
        status: req.body.status
    })

    if (!updatedStatus) {
        return res.status(500)
            .json(
                new ApiResponse(500, "", "Something went wrong while updating status")
            )
    }

    return res.status(200)
        .json(
            new ApiResponse(200, updatedStatus, "Status updated")
        )
})

export {
    orderPlaced,
    getAllOrders,
    storeOrders,
    getOrderData,
    updateStatus
}