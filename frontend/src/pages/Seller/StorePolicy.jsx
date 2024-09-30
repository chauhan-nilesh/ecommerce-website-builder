// import React, { useEffect, useState, useCallback } from 'react';
// import { useAuth } from '../../store/auth';
// import toast from 'react-hot-toast';
// import { useQuill } from 'react-quilljs'; // QuillJS integration
// import Quill from 'quill';
// import 'quill/dist/quill.snow.css'; // Import Quill editor CSS

// function StorePolicy() {
//   // State management for the store and editor content
//   const [storeId, setStoreId] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [shippingPolicy, setShippingPolicy] = useState("");
//   const [returnPolicy, setReturnPolicy] = useState("");
//   const { token } = useAuth(); // Auth context to get user token

//   // QuillJS editor instances
//   const { quill: quill1, quillRef: quillRef1 } = useQuill(); // First Quill editor for shipping policy
//   const { quill: quill2, quillRef: quillRef2 } = useQuill(); // Second Quill editor for return policy

//   // Fetch store data from API
//   const getStoreData = async () => {
//     setLoading(true);
//     try {
//       const response = await fetch(`${import.meta.env.VITE_API_URL}/api/user/current-user`, {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       if (!response.ok) throw new Error('Network response was not ok');

//       const responseData = await response.json();
//       const storeData = responseData.data.store;
//       setStoreId(storeData._id);
//       setShippingPolicy(storeData.shippingPolicy);
//       setReturnPolicy(storeData.returnPolicy);
//     } catch (error) {
//       console.error("Failed to fetch store data:", error);
//       toast.error("Failed to fetch store data");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Run getStoreData when the component mounts
//   useEffect(() => {
//     getStoreData();
//   }, [token]); // Add token to dependencies to re-fetch if it changes

//   // Pre-fill Quill editors when data is available
//   useEffect(() => {
//     if (quill1 && shippingPolicy) {
//       quill1.clipboard.dangerouslyPasteHTML(shippingPolicy); // Set shipping policy in the editor
//     }
//     if (quill2 && returnPolicy) {
//       quill2.clipboard.dangerouslyPasteHTML(returnPolicy); // Set return policy in the editor
//     }
//   }, [quill1, quill2, shippingPolicy, returnPolicy]);

//   // Handle shipping policy text changes from the first editor
//   const handleShipping = useCallback(() => {
//     if (quill1) {
//       const content = quill1.root.innerHTML;
//       setShippingPolicy(content);
//     }
//   }, [quill1]);

//   // Handle return policy text changes from the second editor
//   const handleReturn = useCallback(() => {
//     if (quill2) {
//       const content = quill2.root.innerHTML;
//       setReturnPolicy(content);
//     }
//   }, [quill2]);

//   // Set up Quill event listeners when the editor instances are available
//   useEffect(() => {
//     if (quill1) {
//       quill1.on('text-change', handleShipping);
//     }
//     if (quill2) {
//       quill2.on('text-change', handleReturn);
//     }
//     return () => {
//       if (quill1) {
//         quill1.off('text-change', handleShipping);
//       }
//       if (quill2) {
//         quill2.off('text-change', handleReturn);
//       }
//     };
//   }, [quill1, quill2, handleShipping, handleReturn]);

//   // Handle form submission to save policy updates
//   const handleSubmit = useCallback(async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch(`${import.meta.env.VITE_API_URL}/api/store/update/policy/${storeId}`, {
//         method: "PATCH",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({ returnPolicy, shippingPolicy }),
//       });

//       if (response.ok) {
//         toast.success("Store updated successfully");
//       } else {
//         const errorResponse = await response.json();
//         toast.error(errorResponse.message || "Failed to update store");
//       }
//     } catch (error) {
//       toast.error("Something went wrong while updating the store");
//       console.error(error);
//     }
//   }, [returnPolicy, shippingPolicy, storeId, token]);

//   // Render a loading spinner while data is being fetched
//   if (loading) {
//     return (
//       <div className='flex h-screen w-full justify-center items-center'>
//         <span className="loading loading-spinner loading-lg"></span>
//       </div>
//     );
//   }

//   return (
//     <div className='flex-grow h-screen'>
//       <div className='lg:my-7 lg:mx-10 my-3 mx-3'>
//         <h2 className='text-2xl lg:text-3xl text-zinc-900 font-bold tracking-tighter'>Store Policies</h2>
//         <div className='mt-8 pb-20'>
//           <form className='grid grid-flow-row' onSubmit={handleSubmit}>
//             <div>
//               <h2 className='mb-3 text-lg font-semibold lg:text-xl'>Shipping Policy</h2>
//               <div ref={quillRef1} style={{ height: '200px' }} /> {/* First Quill editor */}

//               <h2 className='mt-7 mb-3 text-lg font-semibold lg:text-xl'>Return & Replacement Policy</h2>
//               <div ref={quillRef2} style={{ height: '200px' }} /> {/* Second Quill editor */}

//               <button type="submit" className='bg-orange-600 hover:bg-orange-700 text-white px-5 py-2 rounded-lg' style={{ marginTop: '20px' }}>Save</button>

//               {/* Content preview */}
//               <div>
//                 <h3>Content Preview:</h3>
//                 <p><strong>Shipping Policy:</strong></p>
//                 <div dangerouslySetInnerHTML={{ __html: shippingPolicy }} />
//                 <p><strong>Return & Replacement Policy:</strong></p>
//                 <div dangerouslySetInnerHTML={{ __html: returnPolicy }} />
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default StorePolicy;
import React from 'react'

function StorePolicy() {
  return (
    <div>StorePolicy</div>
  )
}

export default StorePolicy