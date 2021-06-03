const textElement = document.getElementById('text')
const contingencyButtonsElement = document.getElementById('contingency buttons')
const Yumemi = document.getElementsByClassName('overLayImage')

let state = {}

function startGame() {
    state = {}
    showTextNode(1)
}

function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
    while (contingencyButtonsElement.firstChild) {
        contingencyButtonsElement.removeChild(contingencyButtonsElement.firstChild)
    }

    textNode.contingencies.forEach(contingency => {
        if (showContingency(contingency)) {
            const button = document.createElement('button')
            button.innerText = contingency.text
            button.classList.add('btn')
            button.addEventListener('click', () => selectContingency(contingency))
            contingencyButtonsElement.appendChild(button)
        }
    })
}

function showContingency(contingency) {
    return contingency.requiredState == null || contingency.requiredState(state)
}

function selectContingency(contingency) {
    const nextTextNodeId = contingency.nextText
    if (nextTextNodeId <=0) {
        return startGame()
    }
    state = Object.assign(state, contingency.setState)
    showTextNode(nextTextNodeId)
}

const textNodes = [
    {
        id: 1,
        text: 'You wake up in a strange place. Turning your head around, you assess your surroundings. You seem to be in an empty place, all around you are stars and galaxies, like you are in the center of the universe. A voice suddenly compels you. "Behind you", it says. You turn around, and two items greet your eyes: a glowing lantern and a shining sword. "Choose", says the voice. You comply reluctantly.',
        contingencies: [
            {
                text: "Take the lantern",
                setState: {lantern: true},
                nextText: 2
            },
            {
                text: "Take the sword",
                setState: {sword: true},
                nextText: 2
            }
        ]
    }, 
   
    {
        id: 2,
        text: 'After making a decision for the seemingly arbitrary event, the item you chose dissolved in your hand. You can still feel its presence though. You hear the voice again. "Look up."',
        contingencies: [
            {
                text: 'Look up',
                nextText: "2a"
            },
            {
                text: 'Look down',
                nextText: "2b"
            }
        ]
    },
    
    {
        id: "2a",
        text: "You look up, only to see a humanoid shape falling straight at you.",
        contingencies: [
            {
                text: "Quickly dodge the shape",
                nextText: "2a1"
            },
            {
                text: "Stand still because you are utterly terrified",
                nextText: "2a2"
            }
        ]
    },

    {
        id: "2a1",
        text: "You quickly step to the side as the shape crash straight into the ground with a loud clank.",
        contingencies: [
            {
                text: "Look at the shape on the ground to see what it is",
                nextText: 3
            }
        ]
    },

    {
        id: "2a2",
        text: 'You freeze; the shape crashes straight into you, crushing you into the ground. "OOF", you wheeze. Somehow you survive the collision and get up. You then notice a shape on the ground.',
        contingencies: [
            {
                text: "Look at the shape on the ground to see what it is",
                nextText: 3
            }
        ]
    },

    {
        id: "2b",
        text: 'You suddenly feel something wrong. The voice speaks again, "Look up ... comeon look UP ALREADY!"',
        contingencies: [
            {
                text: "Nah I like looking down",
                nextText: "2b1"
            },
            {
                text: "Finally look up",
                nextText: "2b2"
            }
        ]
    },

    {
        id: "2b1",
        text: 'You continue to stare at the ground. Suddenly something heavy and hard hits you on the head, crushing you to the ground. "Owwwww." You say as you get up. You notice a shape on the ground.',
        contingencies: [
            {
                text: "Look at the shape lying on the ground to see what hit you",
                nextText: 3
            }
        ]
    },

    {
        id: "2b2",
        text: 'You look up, just in time to see something smash into you. "OOF," you wheeze as you fall to the ground from the collision. After a few seconds you come to your senses and get up. You then notice a shape on the ground.',
        contingencies: [
            {
                text: "Look at the shape lying on the ground to see what hit you",
                nextText: 3
            }
        ]
    },
    
    {
        id: 3,
        text: 'You walk up to the shape, examining it carefully. It seems to be the body of a young girl. She has big bands attached to her head, forming a bow tie of sorts. On closer examination, you notice what seems like paint scratches on the body.',
        contingencies: [
            {
                text: "Keep examining the body.",
                nextText: "3a"
            },
            {
                text: "Touch its hand",
                nextText: 4
            }
        ]
    },

    {
        id: "3a",
        text: 'You continue to examine the body. It seems to be a robot of some sort. The robot girl appears to be wearing some sort of a futuristic suit with a red tie and a skirt. A nametag on her chest reads: "Hoshino Yumemi." On her skirt, the text "SCR 5000" is printed; probably a model number.',
        contingencies: [
            {
                text: "Touch the robot's hand",
                nextText: 4
            }
        ]
    },

    {
        id: 4,
        text: "You touch the robot's out-stretched hand. It's cold...",
        contingencies: [
            {
                text: "What is this-",
                nextText: 5
            }
        ]
    },

    {
        id: 5,
        text: "The bands on the robot's head suddenly light up, glowing with a warm blue light. You back up as the robot suddenly whirs to life.",
        contingencies: [
            {
                text: "Watch the robot",
                nextText: 6
            }
        ]
    },

    {
        id: 6,
        text: '"Booting system...systems check. CPU: good condition, Coolant: good condtion, Radiator: good condition, Battery: low, Memory Unit: needs maintenance, Auditory Sensors: functional, Light sensors: functional, Kinetic sensors: slightly damaged. Boot-up complete, systems online." The robot whirred to life.',
        contingencies: [
            {
                text: "uh...",
                nextText: 7
            }
        ]
    },

    {
        id: 7,
        text: 'The robot, Yumemi, looks at you...and opens her mouth. "Welcome back junker! You are the 2,487,289th visitor to the planetarium this time!"',
        contingencies: [
            {
                text: "What-",
                nextText: 8

            }
        ]
    },

    {
        id: 8,
        text: "Suddenly you feel a slight head ache. Then a piercing flash fills your mind ... you remember. You remember now. You remember the planetarium, the day you were scavenging in the sarcophagus city, ruined by war. You stumbled into the planetarium for shelter, where you met Yumemi. Yumemi showed you the wonders of the stars, the brilliance of it all... it gave you hope...",
        contingencies: [
            {
                text: "...",
                nextText: 9

            }
        ]
    },

    {
        id: 9,
        text: "It gave you a dream, a wonderful dream, of the stars beyond the ever winter clouds. The stars beyond the clouds of nuclear fallout...",
        contingencies: [
            {
                text: "...",
                nextText: 10

            }
        ]
    },

    {
        id: 10,
        text: "It was a good dream... no... that is a memory. This is a dream.",
        contingencies: [
            {
                text: "There is still much to be done",
                nextText: 11
            }
        ]
    },

    {
        id: 11,
        text: "Yes, there is still much to be done. I must fulfill my promise to Yumemi, to spread the stars around. To pass on the legends of yore, of clear dreamy nights, of the dazzling brilliance of the stars, the stars that Humanity was meant to reach...",
        contingencies: [
            {
                text: "It was within reach...",
                nextText: 12
            }
        ]
    },

    {
        id: 12,
        text: "It was within reach, yet we missed it. We didn't grasp it. We couldn't grasp it.",
        contingencies: [
            {
                text: "I must go back.",
                nextText: 13
            }
        ]
    },

    {
        id: 13, 
        text: "You look at Yumemi; she's smiling at you, the way she always did...warm and gentle. 'Krrrrkt.' You turn around, only to come face to face with a machine. A fiddle crab, the machine that killed Yumemi. The fiddle crab points its cannon at you; the shot seems to be aimed at your rightside... the machine opens fire.",
        contingencies: [
            {
                text: "Dodge left",
                nextText: "13a"
            },
            {
                text: "Dodge right",
                nextText: "13b"
            }
        ]
    },

    {
        id: "13a",
        text: "You quickly dash to your left and begin running towards the machine. The cannon shell explodes to your right, leaving you unscathed.",
        contingencies: [
            {
                text: "Keep running",
                nextText: 14
            }
        ]
    },

    {
        id: "13b",
        text: "You dash to your right and begin running towards the machine, only to realize that the cannon is pointed directly at you. You quickly jump to the left at the last second, rolling on the ground as the shell explodes just behind you. You look back at the crater left from the impact; if I get hit by one of those, I will be instantly vaporied, you think to yourself.",
        contingencies: [
            {
                text: "Keep running",
                nextText: 14
            }
        ]
    },

    {
        id: 14,
        text: "You continue sprinting at the machine. The machine readies its cannon again, this time towards your left.",
        contingencies: [
            {
                text: "Dodge left",
                nextText: "14a"
            },
            {
                text: "Dodge right",
                nextText: "14b"
            }
        ]
    },

    {
        id: "14a",
        text: "You roll to the left, straight into the line of fire. You suddenly realize your mistake, but it is too late. The last thing you see before everything turns to dark is the bright flash of the cannon barrel.",
        contingencies: [
            {
                text: 'Restart',
                nextText: -1
            }
        ]
    },

    {
        id: "14b",
        text: "You roll to the right and continue charging at the machine. The cannon fires, hitting a spot behind you. You don't look back, as you have finally closed the distance between the machine and yourself.",
        contingencies: [
            {
                text: "Pull out your lantern",
                requiredState: (CurrentState) => CurrentState.lantern,
                nextText: "15a"
            },
            {
                text: "Pull out your sword",
                requiredState: (CurrentState) => CurrentState.sword,
                nextText: "15b"
            }
        ]
    },

    {
        id: "15a",
        text: "You pull out your lantern and chuck it at the machine as you jump into the air. 'Boom!' The machine blows up in a blinding flash of light. You land gracefully, and turn around to face Yumemi. She's still smiling at you.",
        contingencies: [
            {
                text: '"Thank you."',
                nextText: 16
            }
        ]
    },

    {
        id: "15b",
        text: "You pull out your sword and jump into the air. Pointing the sword down, you plunge straight into the machine, destroying it. The sword dissiaptes from your hands as you get up and turn around. You see Yumemi still standing there, smiling at you.",
        contingencies: [
            {
                text: '"Thank you."',
                nextText: 16
            }
        ]
    },

    {
        id: 16,
        text: 'Yumemi opens her mouth: "Welcome back!" She says cheerfully. You smile and close your eyes... it is time to go.',
        contingencies: [
            {
                text: "Exit the dream.",
                nextText: 17
            }
        ]
    },

    {
        id: 17,
        text: "You feel yourself drifting away from the dream world. Everything flashes to white; you return to reality.",
        contingencies: [
            {
                text: "UHHHHH",
                nextText: 18
            }
        ]
    },

    {
        id: 18,
        text: "Congratulations, mortal! You've just finished your first acid trip!",
        contingencies: [
            {
                text: "Wow that was trash... RESTART",
                nextText: -1
            }
        ]
    }
]

startGame()