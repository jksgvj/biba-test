<template>
    <a class="btn" href="/">B<span class="t">&</span>B</a>
    <div class="subname">Music</div>
    <main>
        <section class="player">
            <h2 class="song-title">{{ current.title }} - <span>{{ current.artist }}</span></h2>
            <div class="controls">
                <button class="prev" @click="prev">Назад</button>
                <button class="play" v-if="!isPlaying" @click="play">Play</button>
                <button class="pause" v-else @click="pause">Pause</button>
                <button class="next" @click="next">Вперед</button>
            </div>
        </section>
        <section class="playlist">
            <h3>Плейлист</h3>
            <button v-for="song in songs" :key="song.src" @click="play(song)" :class="(song.src == current.src) ? 'song playing' : 'song'">
            {{ song.title }} - {{ song.artist }}</button>
        </section>
        <div class="rectangle1"></div>
    </main>
</template>

<script>

    export default {
        name: 'app',
        data () {
            return {
                current: {},
                index: 0,
                isPlaying: false,
                songs: [
                    {
                        title: 'Струны Души',
                        artist: 'Lilileo, Impy Light',
                        src: require('@/assets/Struny-dushi.mp3')
                    },   
                    {
                        title: 'Dynamite',
                        artist: 'BTS',
                        src: require('@/assets/Dynamite.mp3')
                    },
                    {
                        title: 'I Really Want to Stay at Your House',
                        artist: 'Rosa Walton Hallie Coggins',
                        src: require('@/assets/I-Really-Want-to-Stay-at-Your-House.mp3')
                    }

                ],
                player: new Audio()   
            }
        },
        methods: {
            play (song) {
                if (typeof song.src != "undefined") {
                    this.current = song;

                    this.player.src = this.current.src;
                }

                this.player.play();
                this.player.addEventListener('ended', function () {
                    this.index++;
                
                    if (this.index > this.songs.length - 1) {
                        this.index = 0;
                    }

                this.current = this.songs[this.index];
                this.play(this.current);
                }.bind(this));
                this.isPlaying = true;
            },
            pause () {
                this.player.pause();
                this.isPlaying = false;
            },
            next () {
                this.index++;
                if (this.index > this.songs.length - 1) {
                    this.index = 0;
                }

                this.current = this.songs[this.index];
                this.play(this.current);
            },
            prev () {
                this.index--;
                if (this.index < 0) {
                    this.index = this.songs.length - 1;
                }

                this.current = this.songs[this.index];
                this.play(this.current);
            }
        },
        created () {
                this.current = this.songs[this.index];
                this.player.src = this.current.src;
        },
    }
    
</script>

<style>
    .btn {
        margin: auto;
        width: 300px;
        text-align: center;
        display: block;
        font: 110px "Times New Roman", sans-serif;
        color: black;
    }

    .subname {
        margin: auto;
        margin-top: -20px;
        text-align: center;
        font-size: 32px;
        font: "Fira Sans", sans-serif;
    }

    /* * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    } */

    body {
        font-family: sans-serif;
    }

    main {
        width: 100%;
        max-width: 768px;
        margin: 0 auto;
        padding: 25px;
    }

    .song-title {
        color: black;
        font-size: 25px;
        font-weight: lighter;
        /* text-transform: uppercase; */
        text-align: center;
    }

    .controls {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 30px 15px;
    }

    button {
        appearance: none;
        background: none;
        border: none;
        outline: none;
        cursor: pointer;
    }

    button:hover {
        opacity: 0.8;
    }

    .play, .pause {
        font-size: 20px;
        font-weight: 700;
        padding: 15px 25px;
        margin: 0px 15px;
        border-radius: 8px;
        color: white;
        background-color: black;
    }

    .next, .prev {
        font-size: 16px;
        font-weight: 700;
        padding: 10px 20px;
        margin: 0px 15px;
        border-radius: 6px;
        color: white;
        background-color: black;
    }

    .playlist {
        padding: 0px 30px;
    }

    .playlist h3 {
        color: black;
        font-size: 28px;
        font-weight: 400;
        margin-bottom: 30px;
        text-align: center;
    }

    .playlist .song {
        display: block;
        width: 100%;
        padding: 15px;
        font-size: 20px;
        font-weight: 700;
        cursor: pointer;
        font-weight: lighter;
    }

    .playlist .song:hover {
        color: #629C5D;
    }

    .playlist .song.playing {
        color: white;
        background: black;
        border-radius: 8px;
    }

    .rectangle1 {
        width: 1000px;
        height: 800px;
        background: #BBE7B7;
        position: absolute;
        margin: auto;
        border-radius: 10px;
        z-index: -1;
        /* top:  20%; */
        left: 17%;
        top: 160px;
    } 
</style>