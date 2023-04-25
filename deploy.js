const { exec } = require("child_process");

const commands   = [];
commands.push( 'npm run build' );
commands.push( 'cd dist' );
commands.push( 'echo \'hamedmoody.ir\' > CNAME' );
commands.push( 'git init' );
commands.push( 'git add -A' );
commands.push( 'git commit -m \'deploy\'' );
commands.push( 'git commit -m \'deploy\'' );
commands.push( 'git push -f https://github.com/hamedmoody/hamedmoody.github.io.git master:deploy' );
commands.push( 'cd -' );

exec( commands.join(' && '), (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});