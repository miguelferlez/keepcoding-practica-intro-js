const input1 = [
    'Downloads',
    'Videos',
    'capture',
    'mp4',
]

const concatFilePath = (list) => {
    let path = '';
    let noExtensionList = [...list];

    noExtensionList.pop();
    path = noExtensionList.join('/') + '.' + list.at(-1);
    return path;
};

concatFilePath(input1); 
console.log(concatFilePath(input1)); // 'Downloads/Videos/capture.mp4'

const input2 = [
    'CodinGame',
    'python',
    'py',
];

concatFilePath(input2); 
console.log(concatFilePath(input2)); // 'CodinGame/python.py'

const input3 = [
    'programming',
    'languages',
    'easy',
    'beginner',
    'useful',
    'pythonstuff',
    'py',
];

concatFilePath(input3); 
console.log(concatFilePath(input3)); // 'programming/languages/easy/beginner/useful/pythonstuff.py'
