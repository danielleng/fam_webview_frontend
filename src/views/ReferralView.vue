<script setup>
import referralHeroImg from '../assets/referral_screen/referral_hero_image.jpg'
import referralShareIcon from '../assets/referral_screen/icons_share_gray.svg'
</script>

<template>
    <body>
        <div class="container mx-auto mb-28">
            <ul role="list" class="">
                <li class="px-5 pt-6 pb-2">
                    <div class="text-2xl font-semibold text-gray-700">Refer &amp; Earn Points!</div>
                </li>
                <li class="px-2 py-2">
                    <img :src="referralHeroImg" class="rounded-2xl"/>
                </li>
                <li class="px-5 py-2">
                    <div class="text-base text-gray-700 flex flex-row px-4 py-3 rounded-lg border-2 border-gray-500">
                        <div class="flex-1">
                            <div class="text-sm">My Referral Code</div>
                            <div class="text-xl font-semibold">JDL01823E</div>
                        </div>
                        <div class="self-center">
                            <img :src="referralShareIcon" class="w-6" />
                        </div> 
                    </div>
                </li>
                <li class="px-5 py-2">
                    <div class="text-sm text-gray-700">
                        <p>Both you and your friend gets a $5 ShopFarEast E-Voucher upon successful signup with your code!.</p>
                        <br>
                        <p><u>How It Works</u><br>
                        Tap the code above and send it to your friend.<br>
                        Your friend will need to tap the link to download the app.<br>
                        Once the app is downloaded enter the code during the sign up process.<br>
                        Upon successful registration you and your friend will both receive a $5 ShopFarEast E-Voucher!<br></p>
                        <br>
                        <p><u>Terms & Conditions</u><br>
                        Terms Line<br>
                        Terms Line<br>
                        Terms Line<br>
                        Terms Line<br></p>
                    </div>
                </li>

                <!-- More items... -->
            </ul>
        </div>
    </body>
  </template>
  
<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

  body{
    font-family: 'Poppins', sans-serif;
  }
</style>
  