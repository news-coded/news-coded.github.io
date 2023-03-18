$( document ).ready(function() {

    $.getJSON( "./vinyles.json", function( data ) {
        var items = [];
        $.each( data, function( i, vinyl ) {

            var divResult = $( "<div>" ).attr( "class", "annonce" ).attr( "id", "annonce_" + vinyl.vinyl_id );
            //$( "<h1>" ).text( "ID annonce : " + vinyl.vinyl_id ).appendTo( divResult );
            $( "<h2>" ).text( /*"Disque Vinyle : " +*/ vinyl.artist + " - " +  vinyl.title + " (" + vinyl.year + ")" ).appendTo( divResult );
            //var container_img = $( "<p>" );
            //$( "<img>" ).attr( "src", vinyl.image ).appendTo( container_img );
            //container_img.appendTo( divResult );
            
            
            $( "<p>" ).text( "Disque vinyle d'occasion. Reçu de ma famille. Possibilité d'acheter le lot entier." ).appendTo( divResult );
            $( "<br>" ).appendTo(divResult);
            
            // Caracteristiques
            var table = $( "<table>" );
            var tbody = $( "<tbody>" );

            var tr = $( "<tr>" );
            $( "<td>" ).text( "Artiste :" ).appendTo(tr);
            $( "<td>" ).text( vinyl.artist ).appendTo(tr);
            tr.appendTo(tbody);
            tr = $( "<tr>" );
            $( "<td>" ).text( "Titre :" ).appendTo(tr);
            $( "<td>" ).text( vinyl.title ).appendTo(tr);
            tr.appendTo(tbody);
            tr = $( "<tr>" );
            $( "<td>" ).text( "Année :" ).appendTo(tr);
            $( "<td>" ).text( vinyl.year ).appendTo(tr);
            tr.appendTo(tbody);
            tr = $( "<tr>" );
            $( "<td>" ).text( "Labels :" ).appendTo(tr);
            $( "<td>" ).text( vinyl.labels ).appendTo(tr);
            tr.appendTo(tbody);
            tr = $( "<tr>" );
            $( "<td>" ).text( "Format :" ).appendTo(tr);
            $( "<td>" ).text( vinyl.format ).appendTo(tr);
            tr.appendTo(tbody);
            tr = $( "<tr>" );
            $( "<td>" ).text( "Pays :" ).appendTo(tr);
            $( "<td>" ).text( vinyl.country ).appendTo(tr);
            tr.appendTo(tbody);
            tr = $( "<tr>" );
            $( "<td>" ).text( "Genre :" ).appendTo(tr);
            $( "<td>" ).text( vinyl.genre ).appendTo(tr);
            tr.appendTo(tbody);
            tr = $( "<tr>" );
            $( "<td>" ).text( "Style :" ).appendTo(tr);
            $( "<td>" ).text( vinyl.style ).appendTo(tr);
            tr.appendTo(tbody);
            tr = $( "<tr>" );
            $( "<td>" ).text( "Page Discorg :" ).appendTo(tr);
            td = $( "<td>" )
            $( "<a>" ).attr("target", "_blank").attr("href", vinyl.vinyl_url).text( vinyl.vinyl_url ).appendTo(td);
            td.appendTo(tr);
            tr.appendTo(tbody);
            tr = $( "<tr>" );
            $( "<td>" ).text( "Prix min :" ).appendTo(tr);
            $( "<td>" ).text( vinyl.price_min.toFixed(2) + "€").appendTo(tr);
            tr.appendTo(tbody);
            tr = $( "<tr>" );
            $( "<td>" ).text( "Prix med :" ).appendTo(tr);
            $( "<td>" ).text( vinyl.price_med.toFixed(2) + "€").appendTo(tr);
            tr.appendTo(tbody);
            tr = $( "<tr>" );
            $( "<td>" ).text( "Prix max :" ).appendTo(tr);
            $( "<td>" ).text( vinyl.price_max.toFixed(2) + "€").appendTo(tr);
            tr.appendTo(tbody);

            tbody.appendTo(table);
            table.appendTo( divResult );

            $( "<br>" ).appendTo(divResult);
            $( "<p>" ).text("Pistes: ").appendTo( divResult );


            // Liste des tracks
            table = $( "<table>" );
            thead = $( "<thead>" );
            tr = $( "<tr>" );
            $( "<td>" ).attr( "width", "100px" ).text( "Position" ).appendTo(tr);
            $( "<td>" ).text( "Titre" ).appendTo(tr);
            $( "<td>" ).text( "Durée" ).appendTo(tr);
            tr.appendTo(thead);
            thead.appendTo(table);

            tbody = $( "<tbody>" );

            $.each( vinyl.tracks, function( i, track ) {
                var tr2 = $( "<tr>" );
                $( "<td>" ).text( track.position ).appendTo(tr2);
                $( "<td>" ).text( track.title ).appendTo(tr2);

                dateObj = new Date(track.durationInSeconds * 1000);
                hours = dateObj.getUTCHours();
                minutes = dateObj.getUTCMinutes();
                seconds = dateObj.getSeconds();
                
                if (hours > 0) {
                    timeString = hours.toString().padStart(2, '0') + ':';
                }
                timeString = minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
                
                $( "<td>" ).text( " [" + timeString + "]" ).appendTo(tr2);
                tr2.appendTo( tbody );
            });

            tbody.appendTo( table );
            table.appendTo( divResult );


            // Photos
            $( "<p>" ).text("Photos: ").appendTo( divResult );
            $.each( vinyl.photo, function( i, photo ) {
                var div = $( "<div>" );
                $( "<p>" ).text( photo + " : " ).appendTo(div);
                $( "<img>" )
                    .attr("width", "100%")
                    .attr("loading", "lazy")
                    .attr("alt", "Photo du disque " + vinyl.title + " (" + photo + ")")
                    .attr( "src", "img_vinyles/" + photo )
                    .appendTo(div);
                div.appendTo( divResult );
            });

            $( "<hr>" ).appendTo(divResult);
            


          //items.push( "<li id='" + i + "'>" + vinyl.vinyl_id + "</li>" );
          divResult.appendTo( "div#listing" )
          //items.push( divResult );
        });
       
        // $( "<div/>", {
        //   "class": "results",
        //   html: items.join( "\n<br/>\n" )
        // }).appendTo( "div#listing" );
    });

});