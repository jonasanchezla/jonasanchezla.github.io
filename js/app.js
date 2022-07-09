class Pet {
    constructor(name, hunger, sleepiness, boredom, age){
      this.name = name
      this.hunger = hunger
      this.sleepiness = sleepiness
      this.boredom = boredom
      this.age = age
    }
  }
  
  class Tamagotchi extends Pet {
    constructor(name, hunger, sleepiness, boredom, age){
      super(name, hunger, sleepiness, boredom, age)
      this.name = name
      this.hunger = 20
      this.sleepiness = 20
      this.boredom = 20
      this.age = 0
    }
  
    feed(){
      this.hunger++
    }
  
    sleep(){
      this.sleepiness++
    }
  
    play(){
      this.boredom++
    }
  
  }
  
  const hungerButton = document.querySelector('.eatFood')
  const sleepinessButton = document.querySelector('.sleepButton')
  const boredomButton = document.querySelector('.bored')
  const removeStats = document.querySelector('.stats')
  const removeStart = document.querySelector('.buttonBegin')
  
  const corgi = new Tamagotchi('.Corgi')
  
  const game = {
  
      setHunger(){
          const intervalID = setInterval(() => {
            const hungerID = document.querySelector('.hunger');
            hungerID.innerText = ` ${corgi.hunger}`;
            corgi.hunger--
            if(corgi.hunger === 10){
              alert('Your pet died from starvation')
              removeStats.remove()
              removeStart.remove()
              document.querySelector('.pet').src = ('https://t4.ftcdn.net/jpg/04/80/42/47/240_F_480424734_GWbUYGJ8w1bYjpQAlkbHZ0em9jKxqJoG.jpg')
              document.body.style.backgroundImage =
              clearInterval(intervalID);
              document.querySelector('button').disabled = false;
              return;
            }
          }, 2000)
          hungerButton.addEventListener('click', () =>{
              corgi.feed();
              console.log(corgi.hunger);
              document.body.style.backgroundImage = "url('https://t4.ftcdn.net/jpg/03/83/81/55/240_F_383815531_nxPYTgB0eCox8X3lD8NuFkhVzKSjScq5.jpg')";
            })
        },
        setSleepiness(){
          const intervalID = setInterval(() => {
            const sleepinessID = document.querySelector('.sleepiness');
            sleepinessID.innerText = ` ${corgi.sleepiness}`;
            corgi.sleepiness--
            if(corgi.sleepiness === 10){
              alert('Your pet died from sleep deprivation')
              removeStats.remove()
              removeStart.remove()
              clearInterval(intervalID);
              document.querySelector('button').disabled = false;
              return;
            }
          }, 2000)
            sleepinessButton.addEventListener('click', () =>{
                corgi.sleep();
                console.log(corgi.sleepiness);
                document.body.style.backgroundImage = "url('https://t3.ftcdn.net/jpg/00/40/91/62/240_F_40916234_jXuP1tHL0cxAbWuzDMwdvoyTXNLcA69j.jpg')";
                const pet = document.querySelector('.pet')
            })
  
          },
          setBoredom(){
            const intervalID = setInterval(() => {
              const boredomID = document.querySelector('.boredom');
              boredomID.innerText = ` ${corgi.boredom}`;
              corgi.boredom--
  
              if(corgi.boredom === 10){
                alert('Your pet died from boredom')
                removeStats.remove()
                removeStart.remove()
                document.querySelector('.pet').src = ('https://t4.ftcdn.net/jpg/04/80/42/47/240_F_480424734_GWbUYGJ8w1bYjpQAlkbHZ0em9jKxqJoG.jpg')
                clearInterval(intervalID);
                document.querySelector('button').disabled = false;
                return;
              }
            }, 2000)
            playButton.addEventListener('click', () =>{
                corgi.play();
                document.body.style.backgroundImage = "url('https://t4.ftcdn.net/jpg/03/58/26/49/240_F_358264909_lKR2T2tmTdvGPTrjGmTklGe42qWrgI0H.jpg')"
              })
          },
  
            setAge(){
              const intervalID = setInterval(() => {
                const ageID = document.querySelector('.age');
                ageID.innerText = ` ${corgi.age}`;
                corgi.age++
                if(corgi.age == 10){
                  alert('Your pet has gained a new form!!!!')
                  document.querySelector('.pet').src = 'https://t4.ftcdn.net/jpg/02/51/19/67/240_F_251196714_RHRdG47REba0plP81MKvq2JrwaUvsWe9.jpg'
                }
  
                if(corgi.age == 21){
                  alert('Your pet has hit its final form!!!!')
                  document.querySelector('.pet').src = 'https://t3.ftcdn.net/jpg/04/49/15/96/240_F_449159608_tZMralmWMHrlNOgFZBRCQLjDUhyGm8AL.jpg'
                }
            }, 1000)
          },
  
            setName(){
            this.name = prompt('Name your pet')
            const nameID = document.querySelector('.name')
            nameID.innerText = `${this.name}`
          },
  
      startGame() {
        this.setName()
        this.setHunger()
        this.setBoredom()
        this.setSleepiness()
        this.setAge()
    }
  
  }
  
  buttonBegin.addEventListener("click", (event)=>{
    event.target.disabled = true;
    game.startGame();
  })
  