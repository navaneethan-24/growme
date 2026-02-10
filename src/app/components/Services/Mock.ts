export const names = ["Beru", "Asta", "Sung Jin Woo", "Igris", "Tank", "Billenon", "Levi", "Alyssa", "Eren", "Mikasa"];
export const professions= ["Doctor 46/M", "Doctor 47/M", "Doctor 48/M", "Doctor 49/M", "Doctor 50/M", "Doctor 51/M", "Doctor 52/M", "Doctor 53/M", "Doctor 54/M", "Doctor 55/M"];
export const groupsList = ["VIP Groups", "Main Groups", "3 Groups", "4 Groups", "5 Groups", " 6Groups"];
export const mbCt = ["c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "c10"];
export const mobiles = ["+974 98765 43210", "+1 98765 43210", "+44 98765 43210", "+49 98765 43210", "+34 98765 43210", "+44 98765 43210"];
export const tagsList = [["Food"], ["Teachers"], ["Actors"], ["Songs"], ["Viral"]];
export const dates = ["15 Dec 2025", "14 Aug 2025", "13 Jun 2025", "12 Jun 2025", "11 Dec 2025", "10 Mar 2025", ];

export const mockrows = Array.from({ length: 50}, (_, i) => ({
    id: i + 1,
    name: names[i % names.length],
    profession: professions[i % professions.length],
    mbCt: [`/${mbCt[i % mbCt.length]}.png`],
    mobiles: mobiles[i % mobiles.length] || "NA",
    groups: [groupsList[i % groupsList.length]],
    tags: tagsList[i % tagsList.length],
    lastEngagement: dates[i % dates.length],
}));



