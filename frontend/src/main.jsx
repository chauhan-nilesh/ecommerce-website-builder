import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom'
import Layout from './pages/Home/Layout.jsx'
import {
  Login,
  SignUp,
  Home,
  Logout,
  AboutUs,
  Pricing,
  TermsAndConditions
} from "./components/Home/index.js"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import { AuthProvider } from './store/auth.jsx'
import AdminLayout from './pages/Seller/SellerLayout.jsx'
import {
  AddCategory,
  AddCoupon,
  AddProduct,
  Analytics,
  Category,
  Coupon,
  Customer,
  CustomizeBanner,
  CustomizeFooter,
  CustomizeStore,
  Dashboard,
  DialogBox,
  DomainSettings,
  EditCategory,
  Orders,
  Payment,
  Products,
  SellerOrderPage,
  Settings,
  Store,
  UserProfile
} from './components/Seller/index.js'
import Error from './pages/Home/Error.jsx'
import StoreLayout from './pages/Shop/StoreLayout.jsx'
import {
  Account,
  AccountContent,
  Cart,
  Checkout,
  CustomerLogin,
  CustomerSignUp,
  Homepage,
  Order,
  OrderPage,
  UpdatePassword
} from './components/Shop/index.js'
import Product from './pages/Shop/Product.jsx'
import Createstore from './components/Home/Createstore.jsx'
import PrivateRoute from './PrivateRoute/index.jsx'
import SubdomainExist from './PrivateRoute/SubdomainExist.jsx'
import { CustomerAuthProvider } from './store/customerAuth.jsx'
import CustomerLogout from './pages/Shop/CustomerLogout.jsx'
import EditProduct from './pages/Seller/EditProducts.jsx'
import EditCoupon from './pages/Seller/EditCoupon.jsx'
import { CartProvider } from './store/CartContext.jsx'
import CustomerPrivateRoute from './PrivateRoute/CustomerPrivateRoute.jsx'
import getSubdomain from './Hooks/getSubdomain.jsx'

const subdomain = getSubdomain()

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {subdomain ? (
        <Route path="/" element={
          <SubdomainExist>
            <CartProvider>
              <StoreLayout />
            </CartProvider>
          </SubdomainExist>
        } >
          <Route path='' element={<Homepage />} />
          <Route path='signup' element={<CustomerSignUp />} />
          <Route path='login' element={<CustomerLogin />} />
          <Route path='product/:id' element={<Product />} />
          <Route path='cart' element={<Cart />} />
          <Route path='checkout' element={
            <CustomerPrivateRoute>
              <Checkout />
            </CustomerPrivateRoute>
          } />
          <Route path='account' element={
            <CustomerPrivateRoute>
              <Account />
            </CustomerPrivateRoute>
          }>
            <Route path='' element={<AccountContent />} />
            <Route path='update-password' element={<UpdatePassword />} />
          </Route>
          <Route path='orders' element={
            <CustomerPrivateRoute>
              <Order />
            </CustomerPrivateRoute>
          } />
          <Route path='order/:id' element={
            <CustomerPrivateRoute>
              <OrderPage />
            </CustomerPrivateRoute>
          } />
          <Route path='logout' element={<CustomerLogout />} />
          <Route path='*' element={<Error />} />
        </Route>
      ) : (
        <>
          <Route path='/' element={<Layout />} >
            <Route path='' element={<Home />} />
            <Route path='signup' element={<SignUp />} />
            <Route path='login' element={<Login />} />
            <Route path='pricing' element={<Pricing />} />
            <Route path='terms-and-conditions' element={<TermsAndConditions />} />
            <Route path='about-us' element={<AboutUs />} />
            <Route path='create-store' element={<Createstore />} />
            <Route path='logout' element={<Logout />} />
          </Route>
          <Route path='seller' element={
            <PrivateRoute>
              <AdminLayout />
            </PrivateRoute>
          } >
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='products' element={<Products />} />
            <Route path='orders' element={<Orders />} />
            <Route path='coupon' element={<Coupon />} />
            <Route path='analytics' element={<Analytics />} />
            <Route path='categories' element={<Category />} />
            <Route path='customers' element={<Customer />} />
            <Route path='payments' element={<Payment />} />
            <Route path='edit-store' element={<Store />} />
            <Route path='settings' element={<Settings />} />
            <Route path='customize-store' element={<CustomizeStore />} />
            <Route path='customize-banner' element={<CustomizeBanner />} />
            <Route path='customize-footer' element={<CustomizeFooter />} />
            <Route path='domain-settings' element={<DomainSettings />} />
            <Route path='edit-profile' element={<UserProfile />} />
            <Route path='dialogbox' element={<DialogBox />} />
            <Route path='add-product' element={<AddProduct />} />
            <Route path='add-category' element={<AddCategory />} />
            <Route path='edit-category/:id' element={<EditCategory />} />
            <Route path='edit-product/:id' element={<EditProduct />} />
            <Route path='add-coupon' element={<AddCoupon />} />
            <Route path='edit-coupon/:id' element={<EditCoupon />} />
            <Route path='orders/:id' element={<SellerOrderPage />} />
          </Route>
          <Route path='*' element={<Error />} />
        </>
      )
      }
    </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <CustomerAuthProvider>
      <React.StrictMode>
        <RouterProvider router={router} />
        <ToastContainer />
      </React.StrictMode>
    </CustomerAuthProvider>
  </AuthProvider>
)
