const { 
    addNoteHandler, 
    getAllNoteHandler, 
    getNoteByIdHandler, 
    editNoteByIdHandler, 
    deteleNoteByIdHandler
} = require("./handler");

const routes = [
    {
        method: 'POST',
        path: '/notes',
        handler: addNoteHandler,
        // options: {
        //     cors: {
        //         origin: ['*'],
        //     },
        // },
    },
    {
        method: 'GET',
        path: '/notes',
        handler: getAllNoteHandler,
    },
    {
        method: 'GET',
        path: '/notes/{id}',
        handler: getNoteByIdHandler,
    },
    {
        method: 'PUT',
        path: '/notes/{id}',
        handler: editNoteByIdHandler,
    },
    {
        method: 'DELETE',
        path: '/notes/{id}',
        handler: deteleNoteByIdHandler,
    }
];

module.exports = routes;

/**
 * Bila ingin cakupannya lebih luas alias CORS diaktifkan di seluruh route yang ada di server, Anda bisa tetapkan CORS pada konfigurasi ketika hendak membuat server dengan menambahkan properti routes.cors.
 */