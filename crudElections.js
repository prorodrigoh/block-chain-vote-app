import { elections } from "./db.js";

// // Election data template
const data = {
    electionDate,       // 'mm/dd/yyyy'
    electionNational,   // true or false
    electionState,      // null or state abbreviation
    electionCounty,     // null or county name
    electionType,       // 'Presidential', 'Federal Senate', 'Federal Congress'
                        // 'Governor', 'State Senate', 'State Congress' ...
    totalSeatsUpToVote, // Amount of seats up to grab in the election
    legislationBegin,   // First day of the legislature
    legislationEnd,     // Last day of legislature
} 

export async function createElection (data) {
    try {
        const doc = await elections.add(data)
        console.log('Election created', doc.id)
    } catch(err) {
        console.error(err)
    }
}

export async function getElection (electionDate) {
    try {
        const doc = await elections
            .where('date', '==', electionDate)
            .get()
    } catch(err) {
        console.error(err)
    }
}
