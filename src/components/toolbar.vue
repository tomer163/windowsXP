<template>
    <div class="container">
        <button class="start">
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="12 -12 48 48" width="28px" height="28px" class="winicon"><path fill="#03a9f4" d="M34.807,12.511l-3.488,12.077c-3.03-2.052-6.327-3.744-13.318-0.83l3.408-11.945l0.041-0.019C28.414,8.908,31.787,10.447,34.807,12.511z"/><path fill="#ffc107" d="M36.633,13.68l-3.447,11.943c3.028,2.069,6.383,3.718,13.365,0.805l3.324-11.643C42.76,17.24,39.66,15.731,36.633,13.68z"/><path fill="#ff5722" d="M35.387,10.337l3.441-11.964C35.8-3.688,32.442-5.344,25.454-2.424L22.011,9.59c2.775-1.153,4.969-1.682,6.806-1.666C31.604,7.942,33.563,9.102,35.387,10.337z"/>
                <path fill="#7cb342" d="M40.643-0.369l-3.44,12.033c3.018,2.063,6.669,3.752,13.359,0.738L54,0.415C47.021,3.317,43.665,1.688,40.643-0.369z"/>
            </svg>
            <span>start</span>
        </button>
        <div class="righticons">
            <button class="expand">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" stroke="5px" height="9px" width="9px" version="1.1" id="Capa_1" viewBox="0 0 34.075 34.075" xml:space="preserve">
                    <g>
                        <g>
                            <path style="fill:#ffffff;" d="M24.57,34.075c-0.505,0-1.011-0.191-1.396-0.577L8.11,18.432c-0.771-0.771-0.771-2.019,0-2.79    L23.174,0.578c0.771-0.771,2.02-0.771,2.791,0s0.771,2.02,0,2.79l-13.67,13.669l13.67,13.669c0.771,0.771,0.771,2.021,0,2.792    C25.58,33.883,25.075,34.075,24.57,34.075z"/>
                        </g>
                    </g>
                </svg>
            </button>
        </div>
    </div>
</template>

<style scoped lang="scss">
.container{
    user-select: none;
    position:absolute;
    display:flex;
    height:2.2rem;
    width:100%;
    bottom:0;
    background-image: linear-gradient(to top,rgb(0, 85, 212)70%, rgb(99, 160, 252));
}

.start{
    height:100%;
    display:flex;
    align-items: center;
    appearance: none;
    color:white;
    text-shadow: -1px 1px 3px rgba(0, 0, 0, 0.705);
    border:none;
    background:rgb(14, 143, 14);
    background-image: linear-gradient(to top,rgb(38, 163, 0)70%, rgb(167, 214, 153));
    box-shadow:inset -2px -1px 10px rgba(0, 0, 0, 0.534);
    cursor: pointer;
    font-weight: 600;
    letter-spacing: 1px;
    font-style: italic;
    border-radius: 0 13px 13px 0;
    font-size:18px;
    padding-right:1.4rem;
    padding-left:0.6rem;
}

.start:hover{
    background-image: linear-gradient(to top,rgb(80, 202, 43)70%, rgb(183, 218, 172));
}

.winicon{
    margin-right: 4px;
    filter: drop-shadow(2px 2px 1px rgba(0, 0, 0, 0.459));
}

.righticons{
    position:relative;
    display: flex;
    height:100%;
    width:8rem;
    background-image: linear-gradient(to top,rgb(0, 142, 224)70%, rgb(96, 168, 209));
    box-shadow:inset 7px 0 8px -5px rgba(255, 255, 255, 0.589);
    border-left:solid 1px rgba(0, 0, 0, 0.568);
    margin-left:auto;
}

.expand{
    position:absolute;
    display:flex;
    justify-content: center;
    align-items: center;
    height:22px;
    border-radius: 9999px;
    border:none;
    aspect-ratio: 1/1;
    left:0;
    transform: translateX(-43%);
    cursor:pointer;
    background:rgb(0, 142, 224);
    box-shadow:inset 1px 1px 4px 0px rgba(255, 255, 255, 0.801), inset -1px -1px 4px 0px rgba(0, 0, 0, 0.623),-1px -1px 0px 0.5px rgba(0, 0, 0, 0.247);
    top:0;
    bottom:0;
    margin:auto;
}

</style>