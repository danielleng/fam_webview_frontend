<script setup>
import walletHeroImg from '../assets/wallet_screen/wallet_hero_image@3x.png'
import memberCardImg from '../assets/wallet_screen/wallet_membercard_image@3x.png'
import pointsIconImg from '../assets/wallet_screen/icons_point_gray.svg'
import vouchersIconImg from '../assets/wallet_screen/icons_voucher_gray.svg'
import parkingIconImg from '../assets/wallet_screen/icons_parkingpoints_gray.svg'
import gameIconImg from '../assets/wallet_screen/icons_game_gray.svg'
import referralIconImg from '../assets/wallet_screen/icons_referral_gray.svg'
</script>

<template>
    <body>
        <div class="container mx-auto">
            <div class="flex flex-col bg-[#525255]">
                <div class="">
                    <img :src="walletHeroImg" />
                </div>
                <div class="mx-10 -mt-40 mb-40 backdrop-blur-sm">
                    <img :src="memberCardImg" />
                </div>
                
            </div>
            <div class="bg-white flex flex-col -mt-10">
                <div class="flex flex-row -mt-8 mb-12 w-full border-t-2 border-gray rounded-3xl bg-white">
                    <div class="ml-8 mr-4 mt-4">
                        <img :src="pointsIconImg" class="w-10"/>
                    </div>
                    <div class="mr-4 mt-3">
                        <div class="text-xl">10,200 Points</div>
                        <div class="text-sm text-gray-500">10,200 expires 6 Aug 2021, 12:00AM</div>
                    </div>
                </div>
                <div class="flex flex-row -mt-8 mb-12 w-full border-t-2 border-gray rounded-3xl bg-white">
                    <div class="ml-8 mr-4 mt-4">
                        <img :src="vouchersIconImg" class="w-10"/>
                    </div>
                    <div class="mr-4 mt-3">
                        <div class="text-xl">2 Vouchers</div>
                    </div>
                </div>
                <div class="flex flex-row -mt-8 mb-12 w-full border-t-2 border-gray rounded-3xl bg-white">
                    <div class="ml-8 mr-4 mt-4">
                        <img :src="parkingIconImg" class="w-10"/>
                    </div>
                    <div class="mr-4 mt-3">
                        <div class="text-xl">S$3.00 Park$</div>
                        <div class="text-sm text-gray-500">S$3.00 expires 6 Aug 2021, 12:00AM </div>
                    </div>
                </div>
                <a href="/">
                  <div class="flex flex-row -mt-8 mb-12 w-full border-t-2 border-gray rounded-3xl bg-white">
                      <div class="ml-8 mr-4 mt-4">
                          <img :src="gameIconImg" class="w-10"/>
                      </div>
                      <div class="mr-4 mt-3">
                          <div class="text-xl">2 Game Chances</div>
                          <div class="text-sm text-gray-500">Play and win rewards!</div>
                      </div>
                  </div>
                </a>
                <a href="/referral">
                  <div class="flex flex-row -mt-8 mb-12 w-full border-t-2 border-gray rounded-3xl bg-white">
                      <div class="ml-8 mr-4 mt-4">
                          <img :src="referralIconImg" class="w-10"/>
                      </div>
                      <div class="mr-4 mt-3 flex flex-col items-center">
                          <div class="text-xl">Refer a friend</div>
                      </div>
                  </div>
                </a>
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
  