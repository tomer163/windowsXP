<template>
    <div :style="style" class="window">
        <div ref="draggable" class="tab">
            <img class="ieicon" src="../assets/iexplorer.png" draggable="false">
            <span class="wintitle">{{ $route.name }}</span>
            <div class="nav">
                <button class="navbut">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" width="20px" height="10px" stroke-width="70" stroke="currentColor" style="position:absolute; bottom:1px; left:1px;" viewBox="0 0 290.658 290.658" xml:space="preserve">
                        <rect y="139.474" width="200.658" height="11.711"/>
                    </svg>
                </button>
                <button class="navbut">
                    <svg viewBox="0 0 500 500" width="35px" height="35px" stroke-width="15" stroke="white" fill="white" style="position:absolute; left:-2px; top:0;" xmlns="http://www.w3.org/2000/svg">
                        <rect x="100.336" y="81.938" width="200.327" height="41.11"/>
                        <rect x="99.457" y="81.995" width="14.574" height="194.789"/>
                        <rect x="286.968" y="81.945" width="14.574" height="195.176"/>
                        <rect x="-230.942" y="238.488" width="14.574" height="200.102" style="transform-box: fill-box; transform-origin: 50% 50%;" transform="matrix(0, 1, 1, 0, 424.16433, -68.798068)"/>
                    </svg>
                </button>
                <button class="navbut">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" style="position: absolute; left:1px; top:1px;">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
        <div class="border">
            <div class="contentback">
                <div class="borderwrap"></div>
                <div class="backopts">
                    <div class="opts">
                        <span>File</span>
                        <span>Edit</span>
                        <span>View</span>
                        <span>Favorites</span>
                        <span>Tools</span>
                        <span>Help</span>
                    </div>
                    <div style="flex-grow: 1;"></div>
                    <div class="winsymbol">
                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="12 -12 48 48" width="100%" height="100%" class="winicon"><path fill="#03a9f4" d="M34.807,12.511l-3.488,12.077c-3.03-2.052-6.327-3.744-13.318-0.83l3.408-11.945l0.041-0.019C28.414,8.908,31.787,10.447,34.807,12.511z"/><path fill="#ffc107" d="M36.633,13.68l-3.447,11.943c3.028,2.069,6.383,3.718,13.365,0.805l3.324-11.643C42.76,17.24,39.66,15.731,36.633,13.68z"/><path fill="#ff5722" d="M35.387,10.337l3.441-11.964C35.8-3.688,32.442-5.344,25.454-2.424L22.011,9.59c2.775-1.153,4.969-1.682,6.806-1.666C31.604,7.942,33.563,9.102,35.387,10.337z"/>
                            <path fill="#7cb342" d="M40.643-0.369l-3.44,12.033c3.018,2.063,6.669,3.752,13.359,0.738L54,0.415C47.021,3.317,43.665,1.688,40.643-0.369z"/>
                        </svg>
                    </div>
                </div>
                <div class="content">
                    <slot/>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useDraggable } from '@vueuse/core';

const draggable = ref(null)

const { style } = useDraggable(draggable)

</script>

<style scoped lang="scss">

$tabheight: 2rem;

.window{
    font-family: tahoma;
    position:fixed;
    width:55rem;
    height:40rem; 
}
.tab{
    user-select: none;
    position:relative;
    width:100%;
    height:$tabheight;
    background-image: linear-gradient(to top,rgb(0, 85, 212)75%, rgb(99, 160, 252));
    border-radius: 15px 15px 0 0;
}

.ieicon{
    position:absolute;
    left:7px;
    top:10px;
    width:17px;
    height:17px;
}

.wintitle{
    color:white;
    position:absolute;
    font-size:19px;
    letter-spacing: 1px;
    top:7px;
    left:32px;

}

.nav{
    color:white;
    gap:2px;
    position:absolute;
    display:flex;
    top:6px;
    bottom:0;
    right:7px;
}

.navbut{
    color:inherit;
    position: relative;
    cursor: pointer;
    appearance: none;
    align-items: center;
    justify-content: center;
    border:solid 1px white;
    box-shadow: inset 2px 2px 6px -2px rgb(255, 255, 255), inset -2px -2px 6px -3px black;
    border-radius: 4px;
    aspect-ratio: 1/1;
}

.navbut:nth-child(3){
    background:rgb(255, 72, 72);
}

.navbut:nth-child(3):hover{
    background:rgb(248, 54, 54);
}

.navbut:nth-child(2){
    background:rgb(43, 98, 216);
}
.navbut:nth-child(1){
    background:rgb(43, 98, 216);
}

.border{
    position:relative;
    background:rgb(0, 85, 212);
    height:calc(100% - $tabheight);
    width:100%;
}

.contentback{
    position:absolute;
    inset:4px 4px 4px 4px;
    background:rgb(234,231,209);
    color:rgba(0, 0, 0, 0.623);
}

.borderwrap{
    position:absolute;
    border:solid 1px rgb(138, 131, 105);
    outline:solid 1px rgb(51, 102, 221);
    inset:0;

}

.backopts{
    display:flex;
    width:100%;
    height:1.8rem;
    border-bottom:solid 1px rgb(206, 198, 175);
    outline: solid 1px rgb(255, 255, 255);
}
.opts{
    z-index: 1;
    user-select: none;
    display:inline-flex;
    padding-left:10px;
    gap:15px;
    font-size:19px;
    font-weight:900;
    span{
        cursor: pointer;
    }
}

.winsymbol{
    width:3.2rem;
    background:white;
    border-left:solid 1px rgb(206, 198, 175);
    height:100%;
}

.content{
    all:initial;
    font-family:Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    position:absolute;
    inset:60px 0 30px 0;
    background:white;
    border: solid 1px rgb(172, 170, 164);
    box-shadow: 0 -1px 3px 0 rgba(0, 0, 0, 0.24), 0 1px 3px 0 rgba(0, 0, 0, 0.26);
}

</style>

