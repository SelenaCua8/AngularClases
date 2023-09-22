
let skills: string[] = ['Bash', 'Counter', 'Healing'];


interface Character{
    name: string;
    hp: number;
    skills: string[];
    hometown?: string;
    //o hometown: string | undefined
}


const strider: Character = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter'],
    
};

strider.hometown = 'Rivendell';

console.table(strider)




export{}