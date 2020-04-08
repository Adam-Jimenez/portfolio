<template>
    <nav>
        <h2>Home</h2>
        <ul>
            <li><span>Projects</span></li>
            <li><span>Contact</span></li>
            <li><span>About</span></li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'Nav'
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Lato:300,400&display=swap');
nav {
    position:absolute;
    top:0;
    left:0;
    height: 100%;
    width: 320px;
    background-color: rgba(0,0,0,0.5);

    text-align: center;
    font-family: Lato, Helvetica;
    font-weight: 300;
    color: white;

    padding:0 32px;
    padding-top: 64px;
    transition: background-color 0.2s ease-out;
}
nav:hover {
    background-color: rgba(0,0,0,0.8);
}
h2 {
    padding: 16px 0;
    font-weight: 300;
    font-size: 48px;
    border-bottom: solid 2px rgba(255,255,255,0.8);
}
ul {
    margin:0;
    padding:0;
    padding-top: 16px;
    margin: none;
}
li {
    margin:0;
    padding:0;
    font-size: 28px;
    margin-bottom: 32px;
    list-style-type: none;
}

span {
    display:inline-block;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) 250ms all;
}
span::after {
    display:block;
    content: '';
    border-bottom: solid 2px cyan;  
    transform: scaleX(0);  
    transition: transform 250ms ease-in-out;
}
span:hover {
    color:cyan;
    cursor: pointer;
}
span:hover::after {
    transform: scaleX(1);
}
</style>
