// function data(id, callback) {
//     console.log(`Ma'lumot olinmoqda (ID: ${id})...`);

//     setTimeout(() => {
//         const malumot = { id: id, nom: "Kitob", narx: 20000 };
//         console.log("Ma'lumot olindi:", malumot);
//         callback(malumot);
//     }, 2000);
// }

// data(1, (malumot) => {
//     console.log(`Qabul qilingan ma'lumot: ${malumot.nom}, narxi: ${malumot.narx}`);
// });



function userniTop(id, callback) {
    console.log(`Foydalanuvchi ma'lumotlarini izlash (ID: ${id})...`);

    setTimeout(() => {
        const user = { id: id, ism: "Ismoil", yosh: 17 };
        console.log("Foydalanuvchi topildi:", user);
        callback(user);
    }, 4000);
}

function Buyurtmalari(userId, callback) {
    console.log(`Foydalanuvchining buyurtmalarini olish (ID: ${userId})...`);

    setTimeout(() => {
        const orders = [
            { id: 1, nom: "Kitob", narx: 50000 },
            { id: 2, nom: "Telefon", narx: 20000 },
        ];

        console.log("Buyurtmalar topildi:", orders);
        callback(orders);
    }, 6000);
}

userniTop(101, (user) => {
    console.log(`${user.ism} haqida ma'lumot olindi.`);
    Buyurtmalari(user.id, (orders) => {
        console.log(`${user.ism}ning buyurtmalari:`);
        orders.forEach((order) => {
            console.log(` ${order.nom}, narxi: ${order.narx} so'm`);
        });
    });
});
