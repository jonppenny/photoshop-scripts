// Put this file in Program Files\Adobe\Photoshop\Presets\Scripts\layersToSprite.js
// Run in PhotoShop: File > Scripts > Browse: locate layersToSprite.js and run

// Arrange layers into a sprite sheet.

if (documents.length > 0){
    var rows = 1;

    // --------------------------
    docRef = activeDocument;
    var activeLayer = docRef.activeLayer;

    numLayers = docRef.artLayers.length;

    var cols = Math.ceil(numLayers/rows);

    var spriteX = docRef.width;
    var spriteY = docRef.height;

    // put things in order
    app.preferences.rulerUnits = Units.PIXELS;

    // resize the canvas
    newX = spriteX * cols;
    newY = spriteY * rows;

    docRef.resizeCanvas( newX, newY, AnchorPosition.TOPLEFT );

    // move the layers around
    var rowi = 0;
    var coli = 0;

    for (i=(numLayers - 1); i >= 0; i--){
        docRef.artLayers[i].visible = 1;

        var movX = spriteX*coli;
        var movY = spriteY*rowi;

        docRef.artLayers[i].translate(movX, movY);

        rowi++;
        if (rowi > (rows - 1)){
            coli++;
            rowi = 0;
        }
    }
}