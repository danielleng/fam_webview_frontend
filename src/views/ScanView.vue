<script setup>
import previewImage from '../assets/scan_screen/receipt.png';
import gsap from 'gsap';
import { onMounted } from "vue";

onMounted(() => {
  gsap.from("#bottomAppSheet", {
    duration: .8,
    y: 300,
    ease: 'easeOut'
  });
  gsap.from("#topAppBar", {
    duration: .5,
    y: -300,
    ease: 'easeOut'
  });
  gsap.from("#content", {
    duration: .3,
    opacity: 0,
    ease: 'ease'
  });
});
</script>

<script>
    export default {
        methods: {
            switchThemeMode(event) {
                const htmlElement = document.querySelector("html");
                var activeLightThemeModeIcon = document.getElementById("activeThemeMode-LightIsActive");
                var activeDarkThemeModeIcon = document.getElementById("activeThemeMode-DarkIsActive");
                var appliedThemeMode = htmlElement.getAttribute('theme-mode');
                if (appliedThemeMode == "dark") {
                    // if there is already a dark mode applied, remove it to become light mode. the attribute is theme-mode="".
                    // apply light mode
                    htmlElement.setAttribute("theme-mode", "");
                    activeLightThemeModeIcon.classList.remove("hidden");
                    activeLightThemeModeIcon.classList.add("block");
                    activeDarkThemeModeIcon.classList.remove("block");
                    activeDarkThemeModeIcon.classList.add("hidden");
                    console.log('Twas dark mode, changed to light mode');
                } else {
                    // else apply dark mode. the attribute is theme-mode="dark".
                    // apply dark mode
                    htmlElement.setAttribute("theme-mode", "dark");
                    activeLightThemeModeIcon.classList.remove("block");
                    activeLightThemeModeIcon.classList.add("hidden");
                    activeDarkThemeModeIcon.classList.remove("hidden");
                    activeDarkThemeModeIcon.classList.add("block");
                    console.log('Twas light mode, changed to dark mode');
                }
                // `event` is the native DOM event
                // if (event) {
                // alert(event.target.tagName);
                // }
            },
            directoScreen(event){
                location.href = "/transactionresult";
            }
        }
    };
</script>
<template>
    <div class="bg-gray-300 dark:bg-slate-900 h-screen">
        <div class="container mx-auto h-full">
            <div class="flex flex-col static">
                <div id="topAppBar" class="px-2 py-2 w-full absolute">
                    <button @click="switchThemeMode()" class="h-12 w-12 rounded-full justify-center shadow-lg bg-white dark:bg-gray-700">
                        <div id="activeThemeMode-LightIsActive" class="block fill-gray-900 dark:fill-gray-100 w-12 h-12">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48"
                                viewBox="0 0 48 48" >
                                <path 
                                    d="M 23.976562 3.9785156 A 1.50015 1.50015 0 0 0 22.5 5.5 L 22.5 8.5 A 1.50015 1.50015 0 1 0 25.5 8.5 L 25.5 5.5 A 1.50015 1.50015 0 0 0 23.976562 3.9785156 z M 10.902344 9.4042969 A 1.50015 1.50015 0 0 0 9.8574219 11.980469 L 11.978516 14.101562 A 1.5012202 1.5012202 0 0 0 14.101562 11.978516 L 11.980469 9.8574219 A 1.50015 1.50015 0 0 0 10.902344 9.4042969 z M 37.050781 9.4042969 A 1.50015 1.50015 0 0 0 36.019531 9.8574219 L 33.898438 11.978516 A 1.5012202 1.5012202 0 0 0 36.021484 14.101562 L 38.142578 11.980469 A 1.50015 1.50015 0 0 0 37.050781 9.4042969 z M 24 13 C 17.942632 13 13 17.942636 13 24 C 13 30.057364 17.942632 35 24 35 C 30.057368 35 35 30.057364 35 24 C 35 17.942636 30.057368 13 24 13 z M 24 16 C 28.436049 16 32 19.563954 32 24 C 32 28.436046 28.436049 32 24 32 C 19.563951 32 16 28.436046 16 24 C 16 19.563954 19.563951 16 24 16 z M 5.5 22.5 A 1.50015 1.50015 0 1 0 5.5 25.5 L 8.5 25.5 A 1.50015 1.50015 0 1 0 8.5 22.5 L 5.5 22.5 z M 39.5 22.5 A 1.50015 1.50015 0 1 0 39.5 25.5 L 42.5 25.5 A 1.50015 1.50015 0 1 0 42.5 22.5 L 39.5 22.5 z M 13.009766 33.445312 A 1.50015 1.50015 0 0 0 11.978516 33.898438 L 9.8574219 36.019531 A 1.501221 1.501221 0 1 0 11.980469 38.142578 L 14.101562 36.021484 A 1.50015 1.50015 0 0 0 13.009766 33.445312 z M 34.943359 33.445312 A 1.50015 1.50015 0 0 0 33.898438 36.021484 L 36.019531 38.142578 A 1.5012209 1.5012209 0 1 0 38.142578 36.019531 L 36.021484 33.898438 A 1.50015 1.50015 0 0 0 34.943359 33.445312 z M 23.976562 37.978516 A 1.50015 1.50015 0 0 0 22.5 39.5 L 22.5 42.5 A 1.50015 1.50015 0 1 0 25.5 42.5 L 25.5 39.5 A 1.50015 1.50015 0 0 0 23.976562 37.978516 z">
                                </path>
                            </svg>
                        </div>
                        <div id="activeThemeMode-DarkIsActive" class="hidden fill-gray-900 dark:fill-gray-100 w-12 h-12">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                            width="48" height="48"
                            viewBox="0 0 48 48">
                            <path d="M 19.251953 4.1816406 A 1.50015 1.50015 0 0 0 18.685547 4.2714844 C 10.83761 7.1389995 5 14.64879 5 23.509766 C 5 34.810061 14.189939 44 25.490234 44 C 34.35121 44 41.861 38.16239 44.728516 30.314453 A 1.50015 1.50015 0 0 0 42.517578 28.533203 C 40.047672 30.097477 37.14137 31 34 31 C 25.151594 31 18 23.848406 18 15 C 18 11.85863 18.902523 8.952328 20.466797 6.4824219 A 1.50015 1.50015 0 0 0 19.251953 4.1816406 z M 16.013672 9.1054688 C 15.398281 10.971348 15 12.931096 15 15 C 15 25.471594 23.528406 34 34 34 C 36.068904 34 38.028652 33.601719 39.894531 32.986328 C 36.753979 37.718438 31.532998 41 25.490234 41 C 15.81053 41 8 33.18947 8 23.509766 C 8 17.467002 11.281562 12.246021 16.013672 9.1054688 z"></path>
                            </svg>
                        </div>
                    </button>
                </div>
                <div id="content" class="px-2 py-2 h-2/4">
                    <img :src="previewImage" class="rounded-2xl w-2/3 mx-auto" />
                </div>
                <div id="bottomAppSheet" class="px-5 pt-2 pb-10 fixed bottom-0 w-full bg-white dark:bg-slate-800 drop-shadow rounded-t-3xl">
                    <form action="/transactionresult">
                        <div>
                            <label for="email" class="block text-sm font-medium text-gray-900 dark:text-gray-100">Receipt Amount</label>
                            <div class="mt-1">
                                <input type="number" name="dollarAMt" id="dollarAmt"
                                    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Enter Receipt Amount">
                            </div>
                        </div>
                        <div class="pt-4">
                            <button type="submit" @click="directoScreen" class="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 dark:bg-gray-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Next</button>
                        </div>
                    </form>
                </div>

                <!-- More items... -->
            </div>
        </div>
    </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

body {
    font-family: 'Poppins', sans-serif;
}
</style>


