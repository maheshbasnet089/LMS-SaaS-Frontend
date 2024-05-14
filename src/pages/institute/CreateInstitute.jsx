import React, { useState } from 'react'
import Navbar from '../../globals/components/navbar/Navbar'
import { useDispatch } from 'react-redux'
import { createInstitute } from '../../store/instituteSlice'

const CreateInstitute = () => {
    const dispatch = useDispatch()
    const [data,setData] = useState({
        email : "",
        name : "",
        vatNo : "",
        panNo : "",
        phoneNumber : "",
        latitute : null, 
        longitude : null,
    })

    const handleChange = (e)=>{
        const {name,value} = e.target 
        console.log(name,value)
        setData({
            ...data,
            [name] : value
        })
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch(createInstitute(data))
    }
  return (
    <>
<section class="antialiased  text-gray-600 min-h-screen p-4 mt-40">
    <div class="h-full">
        <div>
            <div class="relative px-4 sm:px-6 lg:px-8 max-w-lg mx-auto">
                <img class="rounded-t shadow-lg" src="https://preview.cruip.com/mosaic/images/pay-bg.jpg" width="460" height="180" alt="Pay background" />
            </div>
            <div class="relative px-4 sm:px-6 lg:px-8 pb-8 max-w-lg mx-auto" x-data="{ card: true }">
                <div class="bg-white px-8 pb-6 rounded-b shadow-lg">

                    <div class="text-center mb-6">
                        <div class="mb-2">
                            {/* <img class="-mt-8 inline-flex rounded-full" src="https://preview.cruip.com/mosaic/images/user-64-13.jpg" width="64" height="64" alt="User" /> */}
                        </div>
                        <h1 class="text-xl leading-snug text-gray-800 font-semibold mb-2">Create Institute 🔥</h1>
                        <div class="text-sm">
                            Learn how to create real web apps using HTML & CSS. Code templates included.
                        </div>
                    </div>
                 <form onSubmit={handleSubmit}>
                 <div x-show="card">
                        <div class="space-y-4">
                            <div>
                                <label class="block text-sm font-medium mb-1" for="card-nr">Institute Name <span class="text-red-500">*</span></label>
                                <input id="card-nr" class="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full" type="text" name='name' placeholder="Digital Pathshala" onChange={handleChange} />
                            </div>
                            <div class="flex space-x-4">
                                <div class="flex-1">
                                    <label class="block text-sm font-medium mb-1" for="card-expiry">Institute Phone No <span class="text-red-500">*</span></label>
                                    <input id="card-expiry" class="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full" type="number" placeholder="9812323232" name='phoneNumber' onChange={handleChange} />
                                </div>
                                <div class="flex-1">
                                    <label class="block text-sm font-medium mb-1" for="card-cvc">Institute Email <span class="text-red-500">*</span></label>
                                    <input id="card-cvc" class="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full" type="email" name='email' onChange={handleChange} placeholder="email@gmail.com" />
                                </div>
                            </div>
                            <div>
                                <label class="block text-sm font-medium mb-1" for="card-name">Institute Address<span class="text-red-500">*</span></label>
                                <input id="card-name" class="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full" type="text" name='address' placeholder="Itahari,Sunsari,Nepal" onChange={handleChange} />
                            </div>
                            <div>
                                <label class="block text-sm font-medium mb-1" for="card-email">Institute Pan No</label>
                                <input id="card-email" class="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full" type="text" name='panNo' placeholder="Enter Pan Number" onChange={handleChange} />
                            </div>
                            <div>
                                <label class="block text-sm font-medium mb-1" for="card-email">Institute Vat No </label>
                                <input id="card-email" class="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full" type="text" name='vatNo' placeholder="Enter Vat No" onChange={handleChange} />
                            </div>
                        </div>
                        <div class="mt-6">
                            <div class="mb-4">
                                <button type='submit' class="font-medium text-sm inline-flex items-center justify-center px-3 py-2 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out w-full bg-indigo-500 hover:bg-indigo-600 text-white focus:outline-none focus-visible:ring-2">Create Institute</button>
                            </div>
                            <div class="text-xs text-gray-500 italic text-center">Your institute will be created !</div>
                        </div>
                    </div>
                 </form>

                   

                </div>
            </div>
        </div>
    </div>
</section>


    </>
  )
}

export default CreateInstitute