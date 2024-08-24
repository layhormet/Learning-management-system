<template>
    <div class="try-yourself">
        <nav-bar></nav-bar>
    </div>
    <div class="content">
        <div class="content-text">
            <h1>Try Your Best to Do <br> the Exercises</h1>
        </div>
        <div class="content-image">
            <img src="../assets/image 4.png" alt="Exercises">
        </div>
    </div>
    <div class="card-container">
        <div class="card-try">
            <div class="card-instruction">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, ut?</p>
            </div>
            <div class="card-result">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, facere.</p>
            </div>
        </div>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';

export default {
    name: 'TryExcericeView',
    components: {
        NavBar
    }
}
</script>

<style scoped>
.try-yourself {
    margin-bottom: 130px;
}

.content {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
}

.content-text h1 {
    font-size: 60px;
    font-weight: bold;
}

.content-image img {
    max-width: 100%;
}

.card-container {
    display: flex;
    justify-content: center;
    margin-top: 50px;
}

.card-try {
    background-color: gainsboro;
    width: 90%;
    padding: 20px;
    display: flex;
    gap: 10px;
    height: 90vh;
    margin-bottom: 20px;
}

.card-instruction {
    background-color: white;
    flex-grow: 1;
    display: flex;
    justify-content: space-between;
    padding: 20px;
}

.card-result {
    background-color: white;
    flex-grow: 1;
    padding: 20px;
}
</style>