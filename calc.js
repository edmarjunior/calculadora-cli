#! /usr/bin/env node

const program = require('commander');

program
    .command("soma <x> <y>")
    .action(function soma(x, y) {
        const result = +x + +y;
        console.log(result);
    });

program.parse(process.argv);
