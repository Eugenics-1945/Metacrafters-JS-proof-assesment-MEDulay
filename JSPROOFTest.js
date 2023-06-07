
// a variable to hold my NFT's
const NFTs = []

// function that will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_name, _eyeColor, _shirtType, _bling) 
{
    const NFT = {
        "Name": _name,
        "EyeColor": _eyeColor,
        "Shirt": _shirtType,
        "Bling": _bling
    }
    NFTs.push(NFT);
    console.log("Succesfully Minted: " + _name);
}


function listNFTs () {
    for(let m = 0; m < NFTs.length; m++){
        console.log("\nID: \t\t" + (m + 1));
        console.log("Name: \t\t" + NFTs[m].Name); 
        console.log("Eyecolor: \t" + NFTs[m].EyeColor);
        console.log("Shirt Type: " + NFTs[m].Shirt); 
        console.log("Bling: \t\t" + NFTs[m].Bling);   
       
}
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log(NFTs.length);
}

// call your functions below this line
// my own examples...
mintNFT("Marie", "Pink", "Duster", "Necklace");
mintNFT("Angela", "Red", "Gown", "Ring");
mintNFT("Eugene", "Blue", "Suit", "Rolex");

listNFTs();
getTotalSupply();
