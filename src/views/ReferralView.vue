<script setup>
import referralHeroImg from '../assets/referral_screen/referral_hero_image@3x.jpg'
import "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"
</script>

<template>
    <body>
        <div class="container mx-auto">
            <div class="flex flex-col">
                <div><img id="referralHeroImg" :src="referralHeroImg" /></div>
                <div class="mx-3 my-4 font-semibold text-xl">
                    Refer & Earn
                </div>
                <div class="mx-3 my-4">
                    <div class="my-4 text-base"><h1>Your Referral Code: XXXXXX</h1></div>
                    <div class="my-4 text-base">
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
                </div>

                <div class="mx-3 my-4">
                  <lottie-player src="https://assets9.lottiefiles.com/datafiles/gUENLc1262ccKIO/data.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop controls autoplay></lottie-player>
                </div>

                <div class="mx-3 my-4"></div>
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
  