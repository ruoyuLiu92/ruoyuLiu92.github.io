gitalk = new Gitalk({
    clientID: 'ced6988e6ccedf962b67',
    clientSecret: '73a32399b7eda1c3142aa163775550aa214b056a',
    repo: 'zshorz.github.io',
    owner: 'zshorz',
    admin: ['zshorz'],
    id: hex_md5(hex_md5(window.location.pathname + window.location.hash)),
    distractionFreeMode: true
});

function lablegen(hook) {
    var dom = Docsify.dom;

    hook.doneEach(function () {
        gitalk.id = hex_md5(hex_md5(window.location.pathname + window.location.hash))
        console.log(gitalk.id)
    });
}
//
$docsify.plugins = [].concat(lablegen, $docsify.plugins);