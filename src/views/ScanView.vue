<script setup>
import referralHeroImg from '../assets/referral_screen/referral_hero_image.jpg'
</script>

<template>
    <body>
        <div class="container mx-auto">
            <div class="flex flex-col">
                <div class="overflow-hidden bg-white">
                    <ul role="list" class="divide-y divide-gray-200">
                        <li class="">
                            <img :src="referralHeroImg" />
                        </li>
                        <li class="px-6 py-4">
                            <div class="font-semibold text-xl text-gray-900">Scan Receipt & Earn Points!</div>
                        </li>
                        <li class="px-6 py-4">
                            <div class="text-base text-gray-900">
                                <p>Both you and your friend gets a $5 ShopFarEast E-Voucher upon successful signup with your code!.</p>
                                <u>How It Works</u>
                                Tap the code above and send it to your friend.<br>
                                Your friend will need to tap the link to download the app.<br>
                                Once the app is downloaded enter the code during the sign up process.<br>
                                Upon successful registration you and your friend will both receive a $5 ShopFarEast E-Voucher!<br>

                                <u>Terms & Conditions</u>
                                Terms Line<br>
                                Terms Line<br>
                                Terms Line<br>
                                Terms Line<br>
                            </div>
                        </li>

                        <!-- More items... -->
                    </ul>
                </div>
                
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
  