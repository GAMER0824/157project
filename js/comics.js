AFRAME.registerComponent("comic", {
    init: function () {
        this.poster_Container = this.el;
        this.createCards()
    },

    createCards: function () {
        const ComicRef = [
            {
                id: "Super_Man",
                title: "Super Man",
                url: "./assets/thumbnail/super_man.jpg",
            },
            {
                id: "Green_lantern",
                title: "Green Lantern",
                url: "./assets/thumbnail/green_lantern.jpg",
            },

            {
                id: "Flash",
                title: "The Flash",
                url: "./assets/thumbnail/flash.jpg",
            },
            {
                id: "Bat_man",
                title: "I'm Bat man",
                url: "./assets/thumbnail/bat_man.jpg",
            },
        ];
        let prevoiusXPosition = -60;

        for (var item of ComicRef) {
            const posX = prevoiusXPosition + 25;
            const posY = 10;
            const posZ = -70;
            const position = { x: posX, y: posY, z: posZ };
            prevoiusXPosition = posX;

            const posterEl = this.createPoster(position, item.url)

            const titleEl = this.createTitleEl(position, item)
            posterEl.appendChild(titleEl)

            this.poster_Container.appendChild(posterEl);
            prevoiusXPosition=posX
        }
    },

    createPoster: function (position, url) {
        console.log(url)
        const entityEl = document.createElement("a-entity")
        entityEl.setAttribute("visible", true)
        entityEl.setAttribute("geometry", {
            primitive: "plane",
            width: "20",
            height: "28"
        })
        entityEl.setAttribute("position", position)
        entityEl.setAttribute("material", {src: url})
        return (entityEl)
    },

    createTitleEl: function (position, item) {
        const entityEl = document.createElement("a-entity")
        entityEl.setAttribute("visible", true)
        const elposition = position
        elposition.y = -30
        entityEl.setAttribute("position", elposition)
        entityEl.setAttribute("text", {
            font: "exo2bold",
            align: "center",
            width: 80,
            color: "#e65100",
            value: item.title,
        })
        return (entityEl)
    },


});
