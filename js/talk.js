new TypeIt("#tqyxhj", {
        loop: false,
        cursorSpeed: 1000,
        speed: 100
    })
    .type("你好呀小火")
    .pause(2000)
    .delete(null, {
        delay: 500
    })
    .type("这是我为你做的一个简单的小网页")
    .pause(3000).go()
    ;

new TypeIt('#talkToXHJ', {
    lifeLike: true,
    cursorSpeed: 1000,
    waitUntilVisible: true,
    speed: 100
}).go();