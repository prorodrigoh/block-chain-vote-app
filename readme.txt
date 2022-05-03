- The app is a wallet that holds NFTs with the voting registration and the vote confirmation. 
- the only way to read the NFTs is at an official polling place or a voting registration office
- the app doesn't require a login for the voter. it is anonymous.
- even when the wallet holds the NFT1 after registration, that NFT1 can be sent to another wallet in another phone
- one phone can hold several NFTs, a person can label the NFT to ease the identification of ownership during voting
- the label can be changed anytime and does not affect the NFT block chain code

- inside elections collection we have the document of a new election
- inside the election document we have the candidates collection
- inside candidates collection we have the document of all candidates
- inside of each candidate document we have the votes collection
- inside votes collection we have the documents of all votes 

- NFTs in the app are block chain codes showing QR codes that are readable by regular scanners to ease the ownership transfer

- during the registration process the app generates an NFT1 and the voter reads that QR code with the app to transfer the ownership
- every voter gets one NFT1 with all the voting information and marked not used
- on election day the voter goes to the polls and show the NFT1 to the official
- the official reads the NFT1 and transfers its ownership.
- on the official screen the app shows the registered voter data, all the data about the election and that the voter hasn't voted yet
- the official confirms the voter data on his screen 
- if the voter loses the NFT1, the official can generate one if the voter is confirmed registered
- the officer can search by the voter's id and generate a copy of the NFT1
- all the transfer has to occur in the app like a regular registration
- if the "lost" NFT1 is presented by another person in the same place the app will check the voter
- the official confirms the data on his screen and verifies that the person holding the NFT1 is not the registered voter

- the official authorizes the voter to vote in the app
- the voter receives authorization to vote from the app
- the app shows all the information about the election and the voter confirms the information
- the app erases the voter information on NFT1 and marks it as used on both apps (voter&Official)

- the app goes through the options for that vote (presidential, senate, etc...)
- the app takes the selection from the pool and asks for confirmation of the vote
- loop until all required votes are casted 
- the app generates an NFT2 with the information of the selections voted
- the voter presents the NFT2 to the official
- the official reads it and the app confirms the vote received
- the app creates in the database the votes to the selections
- the app confirms that the vote has been cast
- the app register in the NFT2 the confirmation that the vote has been cast
- the NFT1 is marked voted so the voter can't vote again
- the app can't generate another NFT1 after that

- the NFT1 contains the information about the election but not about the voter 
- it works as an authorization ticket to vote

- the NFT2 contains the information about the vote but not the voter
- it works like a receipt
- it can be read only at official stations
- in those station it retrieves the vote casted in that NFT but no information about the voter

- the app works like a wallet where both NFTs will be stored 
- the NFTs can be downloaded and shared by anyone
- they are unique and correspond to one voting authorization and one casted vote

- anyone can present the NFT1 and the NFT2
- the app will show that NFT1 was registered and NFT2 was casted but they can't be linked to a voter
