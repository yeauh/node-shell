// Output a prompt
process.stdout.write('(^C to exit)prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
    const cmd = data.toString().trim(); // remove the newLine

    process.stdout.write('\nYou typed: ' + cmd + '\n');
    process.stdout.write('\prompt > ');
});