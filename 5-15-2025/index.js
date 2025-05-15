let userRegistry = {
    user0: {
        age: 13,
        isAdmin: true,
        interests: ["Software Engineering", "Duolingo", "Chess", "Roblox", "Counter Strike 2"]
    },
    user1: {
        age: 11,
        isAdmin: false,
        interests: ["Roblox", "Minecraft", "Food", "Youtube"]
    },
    user2: {
        age: 10,
        isAdmin: false,
        interests: ["Xbox", "Minecraft", "Youtube"]
    },
    user3: {
        age: 9,
        isAdmin: false,
        interests: ["Beauty", "Barbie", "Youtube"]
    }
}

userRegistry.user0.age = 14;
userRegistry.user2.interests.push("Roblox");
delete userRegistry.user3;
console.log(userRegistry);
console.log("Does user2's interests include \"Xbox\"? ", userRegistry.user2.interests.includes("Xbox"));
