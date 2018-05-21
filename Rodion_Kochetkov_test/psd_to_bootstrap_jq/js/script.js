/**
 * Created by Kochetkov on 27.10.2017.
 */
function Run_script() {
    try {
        eval(document.getElementsByTagName('textarea')[0].value);
    } catch (err) {
        alert(`Не выйдет, ошибка ${err}`);
    }
}