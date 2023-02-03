<script setup>
import previewImage from '../assets/scan_screen/receipt.png'
</script>

<template>
    <body class="bg-gray-300 h-screen">
        <div class="container mx-auto pb-28 bg-gray-30 h-full">
            <div class="flex flex-col">
                <div class="px-2 py-2">
                    <img :src="previewImage" class="rounded-2xl w-2/3 mx-auto"/>
                </div>
                <div class="px-5 pt-2 pb-10 fixed bottom-0 w-full bg-white drop-shadow rounded-t-2xl">
                    <form>
                        <div>
                            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                            <div class="mt-1">
                                <input type="email" name="email" id="email" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="you@example.com">
                            </div>
                        </div>
                        <div>
                            <button type="submit" class="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Next</button>
                        </div>
                    </form>
                </div>

                <!-- More items... -->
            </div>
        </div>
    </body>
  </template>
  
<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

  body{
    font-family: 'Poppins', sans-serif;
  }
</style>
  