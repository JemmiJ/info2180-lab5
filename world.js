document.addEventListener('DOMContentLoaded', function ()
{
    document.getElementById("lookup").addEventListener("click", function(){
        var country = document.getElementById('country').value;
        /*fetch('world.php?country=' + encodeURIComponent(country))
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(data => {

                document.getElementById("result").innerHTML = data;
            })
            .catch(error => {
                
                console.error('There was a problem with the fetch operation:', error);
            });
    });*/
        var req = new XMLHttpRequest();

        req.onreadystatechange = function(){
            if (req.readyState == XMLHttpRequest.DONE)
            {
                if (req.status == 200)
                {
                    document.getElementById("result").innerHTML = req.responseText;
                }else {
                    document.getElementById("result").innerHTML = "Error: "+req.status;
                }
            }
        };
        req.open("GET","world.php?country=" + encodeURIComponent(country), true);
        req.send("world.php?country="+encodeURIComponent(country));
    });
});