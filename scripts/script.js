
/*
╭╮╭━╮╱╱╱╱╱╭╮
┃┃┃╭╯╱╱╱╱╱┃┃
┃╰╯╯╭━━┳╮╭┫╰━┳━━┳╮╱╭╮
┃╭╮┃┃╭╮┃┃┃┃╭╮┃┃━┫┃╱┃┃
┃┃┃╰┫╰╯┃╰╯┃╰╯┃┃━┫╰━╯┃
╰╯╰━┻━╮┣━━┻━━┻━━┻━╮╭╯
╱╱╱╱╱╱┃┃╱╱╱╱╱╱╱╱╭━╯┃
╱╱╱╱╱╱╰╯╱╱╱╱╱╱╱╱╰━━╯
Vk: vk.com/kqubey
 */

document.addEventListener("DOMContentLoaded", function ()
{
    let score = 0;
    const element = document.getElementById("score");
    const click = document.getElementById("click");
    click.addEventListener("click", function()
    {
        score++;
        element.innerText = score;

        if (score % 100 === 0)
        {
            setTimeout(function() {
                alert("You have already typed: " + score + " clicks!");
            }, 0);
        }
    })
})