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
                        <img :src="pointsIconImg" class="w-10" />
                    </div>
                    <div class="mr-4 mt-3">
                        <div class="text-xl">10,200 Points</div>
                        <div class="text-sm text-gray-500">10,200 expires 6 Aug 2021, 12:00AM</div>
                    </div>
                </div>
                <div class="flex flex-row -mt-8 mb-12 w-full border-t-2 border-gray rounded-3xl bg-white">
                    <div class="ml-8 mr-4 mt-4">
                        <img :src="vouchersIconImg" class="w-10" />
                    </div>
                    <div class="mr-4 mt-3">
                        <div class="text-xl">2 Vouchers</div>
                    </div>
                </div>
                <div class="flex flex-row -mt-8 mb-12 w-full border-t-2 border-gray rounded-3xl bg-white">
                    <div class="ml-8 mr-4 mt-4">
                        <img :src="parkingIconImg" class="w-10" />
                    </div>
                    <div class="mr-4 mt-3">
                        <div class="text-xl">S$3.00 Park$</div>
                        <div class="text-sm text-gray-500">S$3.00 expires 6 Aug 2021, 12:00AM </div>
                    </div>
                </div>
                <a href="/">
                    <div class="flex flex-row -mt-8 mb-12 w-full border-t-2 border-gray rounded-3xl bg-white">
                        <div class="ml-8 mr-4 mt-4">
                            <img :src="gameIconImg" class="w-10" />
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
                            <img :src="referralIconImg" class="w-10" />
                        </div>
                        <div class="mr-4 mt-3 flex flex-col items-center">
                            <div class="text-xl">Refer a friend</div>
                        </div>
                    </div>
                </a>
                <a href="/services">
                    <div class="flex flex-row -mt-8 mb-12 w-full border-t-2 border-gray rounded-3xl bg-white">
                        <div class="ml-8 mr-4 mt-4">
                            <img :src="gameIconImg" class="w-10" />
                        </div>
                        <div class="mr-4 mt-3">
                            <div class="text-xl">Services</div>
                        </div>
                    </div>
                </a>
                <a href="/scan">
                    <div class="flex flex-row -mt-8 mb-12 w-full border-t-2 border-gray rounded-3xl bg-white">
                        <div class="ml-8 mr-4 mt-4">
                            <svg width="64" height="64" viewBox="0 0 64 64" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M14.0002 6.66675C12.896 6.66675 12.0002 7.56258 12.0002 8.66675V9.573C8.18245 10.4792 5.3335 13.9115 5.3335 18.0001V46.0001C5.3335 50.7813 9.21891 54.6667 14.0002 54.6667H50.0002C54.7814 54.6667 58.6668 50.7813 58.6668 46.0001V18.0001C58.6668 13.2188 54.7814 9.33341 50.0002 9.33341H25.3335V8.66675C25.3335 7.56258 24.4377 6.66675 23.3335 6.66675H14.0002ZM16.6668 20.0001H20.6668C21.771 20.0001 22.6668 20.8959 22.6668 22.0001C22.6668 23.1042 21.771 24.0001 20.6668 24.0001H16.6668C15.5627 24.0001 14.6668 23.1042 14.6668 22.0001C14.6668 20.8959 15.5627 20.0001 16.6668 20.0001ZM37.3335 20.0001C43.9481 20.0001 49.3335 25.3855 49.3335 32.0001C49.3335 38.6147 43.9481 44.0001 37.3335 44.0001C30.7189 44.0001 25.3335 38.6147 25.3335 32.0001C25.3335 25.3855 30.7189 20.0001 37.3335 20.0001ZM37.3335 24.0001C32.9168 24.0001 29.3335 27.5834 29.3335 32.0001C29.3335 36.4167 32.9168 40.0001 37.3335 40.0001C41.7502 40.0001 45.3335 36.4167 45.3335 32.0001C45.3335 27.5834 41.7502 24.0001 37.3335 24.0001Z"
                                    fill="#424242" />
                            </svg>

                        </div>
                        <div class="mr-4 mt-3">
                            <div class="text-xl">Scan</div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </body>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

body {
    font-family: 'Poppins', sans-serif;
}
</style>
