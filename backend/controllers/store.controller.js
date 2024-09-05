import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { stores } from "../models/store.model.js";
import { users } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

const createStore = asyncHandler(async (req, res) => {
    const { name, storename, owner, subdomain } = req.body;

    const existingStore = await stores.findOne({ storename })

    if (existingStore) {
        return res.status(400)
            .json(
                new ApiError(400, "Store name is already taken")
            )
    }

    const userStoreAlreadyExist = await stores.findOne({ owner: owner })

    if (userStoreAlreadyExist) {
        return res.status(400)
            .json(
                new ApiResponse(400, "", "User already have a store. One user can have only one store")
            )
    }

    const storeCreated = await stores.create({
        storename,
        owner,
        name,
        subdomain,
        logo: "",
        favicon: "",
        banner: ""
    })

    const user = await users.findById(owner)

    user.store = storeCreated._id
    await user.save()

    return res.status(200)
        .json(
            new ApiResponse(200, storeCreated, "Store created successfully")
        )
})

const getCurrentStoreData = asyncHandler(async (req, res) => {
    const { subdomain } = req.body;
    const storeExist = await stores.findOne({ storename: subdomain })

    if (!storeExist) {
        return res.status(400)
            .json(
                new ApiResponse(400, "", "Store not Found")
            )
    }

    const store = await stores.findOne({ storename: subdomain }).select("-customers -orders -coupon -revenue -storename")

    return res.status(200)
        .json(
            new ApiResponse(200, { store }, "Store Found")
        )

})

const updateStoreName = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { name, color1, color2, hideCategory } = req.body;

    const store = await stores.findByIdAndUpdate(id,
        {
            $set: {
                name,
                themeColorOne: color1,
                themeColorTwo: color2,
                hideCategory
            }
        },
        {
            new: true
        }
    ).select("-password")

    return res.status(200)
        .json(
            new ApiResponse(200, store, "Store data updated successfully")
        )
})

const updateSocial = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { bio, email, instagram, facebook, twitter, youtube } = req.body;

    const store = await stores.findByIdAndUpdate(id,
        {
            $set: {
                bio,
                email,
                instagram,
                facebook,
                twitter,
                youtube
            }
        },
        {
            new: true
        }
    )

    return res.status(200)
        .json(
            new ApiResponse(200, store, "Store data updated successfully")
        )
})

const changeStoreStatus = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    const store = await stores.findByIdAndUpdate(id,
        {
            $set: { status: status }
        },
        {
            new: true
        }).select("-password")

    if (store.status === true) {
        return res.status(200)
            .json(
                new ApiResponse(200, store, "Store activated successfully")
            )
    } else {
        return res.status(200)
            .json(
                new ApiResponse(200, store, "Store deactivated successfully")
            )
    }
})

const deleteStore = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const store = await stores.findByIdAndDelete(id).select("-password")

    return res.status(200)
        .json(
            new ApiResponse(200, store, "Your store is deleted")
        )
})

const storeData = asyncHandler(async (req, res) => {
    const { subdomain } = req.params;
    const store = await stores.findOne({ storename: subdomain }).select("-password").populate("products categories")
    
    return res.status(200)
        .json(
            new ApiResponse(200, store, "Store data fetched successfully")
        )
})

const addUpi = asyncHandler(async (req, res) => {
    const { storeId } = req.params;
    const { name, upiId } = req.body;

    if (name === "" || upiId === "") {
        return res.status(400)
            .json(
                new ApiResponse(400, "", "All feilds are required")
            )
    }
    const checkUpiAlreadyAdded = await stores.findOne({ _id: storeId })

    if (checkUpiAlreadyAdded.upiId) {
        return res.status(400)
            .json(
                new ApiResponse(400, "", "You can add only one UPI ID")
            )
    }

    const store = await stores.findByIdAndUpdate(storeId,
        {
            $set: {
                upiId,
                upiReceiverName: name,
                upiStatus: true
            }
        },
        {
            new: true
        })

    return res.status(200)
        .json(
            new ApiResponse(200, store, "Payment details saved successfully")
        )
})

const changeUpiStatus = asyncHandler(async (req, res) => {
    const { storeId } = req.params;
    const { status } = req.body;

    const store = await stores.findByIdAndUpdate(storeId,
        {
            $set: { upiStatus: status }
        },
        {
            new: true
        })

    if (store.upiStatus) {
        return res.status(200)
            .json(
                new ApiResponse(200, store, "Payment method Activated")
            )
    } else {
        return res.status(200)
            .json(
                new ApiResponse(200, store, "Payment method deactivated"))
    }

})

const deleteUpiId = asyncHandler(async (req, res) => {
    const { storeId } = req.params;
    const store = await stores.findByIdAndUpdate(storeId,
        {
            $set: {
                upiId: "",
                upiReceiverName: "",
                upiStatus: false
            }
        },
        {
            new: true
        })

    return res.status(200)
        .json(
            new ApiResponse(200, store, "Payment method deleted")
        )

})

const uploadStoreImage = asyncHandler(async (req,res) => {
    const store = await stores.findById(req.body.storeId)
    
    const uploadImages = await stores.findOneAndUpdate({_id: req.body.storeId},{
            logo: req.files.logo ? await uploadOnCloudinary(req.files.logo[0].path) : store.logo,
            favicon: req.files.favicon ? await uploadOnCloudinary(req.files.favicon[0].path) : store.favicon,
            banner: req.files.banner ? await uploadOnCloudinary(req.files.banner[0].path) : store.banner,
            mobileBanner: req.files.mobileBanner ? await uploadOnCloudinary(req.files.mobileBanner[0].path) : store.mobileBanner
        
    })


    return res.status(200)
    .json(
        new ApiResponse(200,{store: uploadImages},"Images uploaded successfully")
    )

})

const getCustomerData = asyncHandler(async (req,res) => {
    const {storeId} = req.params;
    
    const storeExist = await stores.findById(storeId).populate("customers")

    if(!storeExist){
        return res.status(400)
        .json(
            new ApiResponse(400,"","Store not exist")
        )
    }
    
    return res.status(200)
    .json(
        new ApiResponse(200,storeExist,"Store data fetched along with Customer data")
    )

})

export {
    createStore,
    getCurrentStoreData,
    updateStoreName,
    updateSocial,
    changeStoreStatus,
    deleteStore,
    storeData,
    addUpi,
    changeUpiStatus,
    deleteUpiId,
    uploadStoreImage,
    getCustomerData
}