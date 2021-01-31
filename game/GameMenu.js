class GameMenu {

    static WELCOME_MESSAGE = "Welcome to JSGame v1.0.<br><br>";
    static CHOICE = "Please make your choice and press Enter:<br>";
    static START = "Start new game";
    static OPTIONS = "Game options";
    static CREDITS = "Game credits";
    static EXIT = "Exit";
    static GAME_END = "Game end";
    static SAVE = "Save";

    startGameButton;
    gameOptionsButton;
    gameCreditsButton;
    exitGameButton;
    saveGameButton;
    restartGameButton;

    rows;
    columns;
    amountOfEnemies;
    maxScore;
    maxSteps;

    setGameMenuPage() {
        this.printGameMenu();
        this.addListeners();
    }

    printGameMenu() {
        gameMenu = document.querySelector("#gamemenu");
        gameMenu.innerHTML = GameMenu.WELCOME_MESSAGE + GameMenu.CHOICE;

        this.startGameButton = document.querySelector("#startGame");
        this.gameOptionsButton = document.querySelector("#gameOptions");
        this.gameCreditsButton = document.querySelector("#gameCredits");
        this.exitGameButton = document.querySelector("#exitGame");
        this.saveGameButton = document.querySelector('#saveBtn');
        this.restartGameButton = document.querySelector('#restartGame');

        this.startGameButton.innerHTML = GameMenu.START;
        this.gameOptionsButton.innerHTML = GameMenu.OPTIONS;
        this.gameCreditsButton.innerHTML = GameMenu.CREDITS;
        this.exitGameButton.innerHTML = GameMenu.EXIT;
        this.saveGameButton.innerHTML = GameMenu.SAVE;
        this.restartGameButton.innerHTML = GameMenu.START;
    }

    /**
     * Set listeners for button click Event
     */
    addListeners() {
        this.startGameButton.addEventListener("click", this.startGameHandler);
        this.gameOptionsButton.addEventListener("click", this.gameOptionsHandler);
        this.gameCreditsButton.addEventListener("click", this.gameCreditsHandler);
        this.exitGameButton.addEventListener("click", this.exitGameHandler);
        this.saveGameButton.addEventListener("click", this.saveGameOptionsHandler);
        this.restartGameButton.addEventListener("click", this.startGameHandler);
    }

    startGameHandler() {
        hiddenElements(['options', 'rows', 'columns', 'enemiesAmount', 'maxScore', 'maxSteps', 'saveBtn', 'gameEnd', 'restartGame']);

    }

    gameCreditsHandler() {
        hiddenElements(['options', 'rows', 'columns', 'enemiesAmount', 'maxScore', 'maxSteps', 'saveBtn', 'gameEnd', 'restartGame']);

    }

    gameOptionsHandler() {
        let gameOptions = document.querySelector("#options");
        gameOptions.innerHTML = GameMenu.OPTIONS;
        showElements(['options', 'rows', 'columns', 'enemiesAmount', 'maxScore', 'maxSteps', 'saveBtn', 'gameEnd', 'restartGame']);
    }

    saveGameOptionsHandler() {
        this.rows = setElementsByTypeValue("#rows", Number);
        this.columns = setElementsByTypeValue("#columns", Number);
        this.amountOfEnemies = setElementsByTypeValue("#enemiesAmount", Number);
        this.maxScore = setElementsByTypeValue("#maxScore", Number);
        this.maxSteps = setElementsByTypeValue("#maxSteps", Number);

        hiddenElements(['options', 'rows', 'columns', 'enemiesAmount', 'maxScore', 'maxSteps', 'saveBtn', 'gameEnd', 'restartGame']);
    }

    exitGameHandler() {
        hiddenElements(['options', 'rows', 'columns', 'enemiesAmount', 'maxScore', 'maxSteps', 'saveBtn']);

        let gameEnd = document.querySelector("#gameEnd");
        gameEnd.innerHTML = GameMenu.GAME_END + '<br>'+ '<br>' + GameMenu.START;
        showElements(['gameEnd', 'restartGame']);
    }
}

function hiddenElements(elementIdArray) {
    elementIdArray.forEach(elementId => {
        document.getElementById(String(elementId)).hidden = true;
    });
}

function showElements(elementIdArray) {
    elementIdArray.forEach(elementId => {
        document.getElementById(String(elementId)).hidden = false;
    });
}

function setElementsByTypeValue(elementId, type) {
    let element = document.querySelector(`${elementId}`);
    return type(element.value);
}