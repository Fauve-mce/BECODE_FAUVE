
setTimeout(() => {
    document.body.style.backgroundColor = "blue";

    setTimeout(() => {
        document.body.style.backgroundColor = "yellow";

        setTimeout(() => {
            document.body.style.backgroundColor = "red";

            setTimeout(() => {
                document.body.style.backgroundColor = "cyan";

                setTimeout(() => {
                    document.body.style.backgroundColor = "violet";

                    setTimeout(() => {
                        document.body.style.backgroundColor = "green";

                        setTimeout(() => {
                            document.body.style.backgroundColor = "purple";
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);
