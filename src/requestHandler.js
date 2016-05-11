
var requestHandler = function(reqJson) {
  // console.log(reqJson);
  var respJson = [];
  if(reqJson && reqJson.payload) {
    var jsonData = reqJson.payload;

    for (var i = 0; i < jsonData.length; i++) {
      var item = jsonData[i];
      console.log("Item " + item);
      if(item.drm && item.episodeCount > 0) {
        respJson.push({
            image : item.image.showImage,
				    slug : item.slug,
				    title : item.title
        });
      }
    }
    return {
      response : respJson
    }

  } else {
    return {
      "error": "Could not decode request: JSON parsing failed"
    };
  }

}

module.exports = requestHandler;
