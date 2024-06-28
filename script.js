document.getElementById('send-button').addEventListener('click', async () => {
    const userInput = document.getElementById('user-input').value;
    document.getElementById('user-input').value = '';
    addMessage('User', userInput);
    await respondToUser(userInput);
});

function addMessage(sender, message) {
    const output = document.getElementById('output');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.textContent = message;

    if (sender === 'User') {
        messageElement.classList.add('user-message');
    } else {
        messageElement.classList.add('bot-message');
    }

    output.appendChild(messageElement);
    scrollToBottom();
}

function scrollToBottom() {
    const chatWindow = document.getElementById('chat-window');
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

async function respondToUser(userInput) {
    let response = '';

    if (userInput.includes('bonjour')) {
        response = 'Bonjour! Comment puis-je vous aider aujourd\'hui?';
    } else if (userInput.includes('bonsoir')) {
        response = 'Bonsoir! Comment puis-je vous aider aujourd\'hui?';
    } else if (userInput.includes('aide')|| userInput.includes('soutien') || userInput.includes('conseil') || userInput.includes('assistance') || userInput.includes('guidance') || userInput.includes('écoute') || userInput.includes('parler')){
        response = 'Je suis Sonia, un chatbot qui peut vous aider avec des questions sur la santé mentale et le soutien émotionnel. Comment puis-je vous aider aujourd\'hui?';
    } else if (userInput.includes('hello') || userInput.includes('salut')) {
        response = 'Bonjour! Comment puis-je vous aider aujourd\'hui?';
    } else if (userInput.includes('merci')) {
        response = 'De rien! N\'hésitez pas si vous avez d\'autres questions.';
    } else if (userInput.includes('bye')) {
        response = 'Au revoir! Passez une bonne journée.';
    } else if (userInput.includes('dépression') || userInput.includes('triste') || userInput.includes('perdu') || userInput.includes('perdue') || userInput.includes('ennuyeux') || userInput.includes('angoisse') || userInput.includes('angoissant')) {
        response = 'Je suis désolé que vous vous sentiez ainsi. Voici quelques exercices de relaxation qui peuvent vous aider : \n\n- **Respiration profonde** : Inspirez profondément pendant 4 secondes, retenez votre souffle pendant 7 secondes, puis expirez lentement pendant 8 secondes. Répétez cela cinq fois. \n- **Relaxation musculaire progressive** : Contractez et relâchez chaque groupe musculaire de votre corps, en commençant par les pieds et en remontant jusqu\'à la tête. \n- **Visualisation** : Fermez les yeux et imaginez un endroit calme et paisible. Essayez de visualiser chaque détail de cet endroit et de ressentir les sensations associées.';
    } else if (userInput.includes('cancer')) {
        response = 'Le cancer est une maladie où des cellules anormales se divisent de manière incontrôlée et détruisent les tissus corporels. Nous sommes là pour vous aider à traverser cette période difficile.';
    } else if (userInput.includes('relaxation') || userInput.includes('stress') || userInput.includes('anxiété') || userInput.includes('calme') || userInput.includes('zen') || userInput.includes('détente') || userInput.includes('méditation') || userInput.includes('yoga') || userInput.includes('respiration') || userInput.includes('étirements') || userInput.includes('musique relaxante') || userInput.includes('nature') || userInput.includes('balade') || userInput.includes('relaxer') || userInput.includes('relaxant') || userInput.includes('relaxation musculaire') || userInput.includes('visualisation') || userInput.includes('calme intérieur') || userInput.includes('paix intérieure') || userInput.includes('sérénité') || userInput.includes('tranquillité') || userInput.includes('bien-être') || userInput.includes('soulagement') || userInput.includes('soulager') || userInput.includes('apaisant') || userInput.includes('apaiser') || userInput.includes('détendre') || userInput.includes('détente')) {
        response = 'Voici quelques exercices de relaxation : \n\n- **Respiration abdominale** : Asseyez-vous ou allongez-vous confortablement. Placez une main sur votre abdomen et l\'autre sur votre poitrine. Inspirez lentement par le nez en gonflant l\'abdomen, puis expirez lentement par la bouche. Répétez cela pendant 5 minutes. \n- **Méditation guidée** : Écoutez une méditation guidée en ligne ou via une application de méditation. \n- **Étirements doux** : Faites des étirements doux pour détendre vos muscles, comme la pose de l\'enfant ou la pose du chat et de la vache en yoga.';
    } else if (userInput.includes('tribu')) {
        response = 'La tribu représente votre réseau de soutien social. Avez-vous parlé à vos amis ou à votre famille récemment ? Ils peuvent être une source de réconfort et de force.';
    } else if (userInput.includes('alliance thérapeutique')) {
        response = 'L\'alliance thérapeutique est la relation de confiance entre vous et votre professionnel de la santé. Assurez-vous de bien communiquer avec votre médecin et de poser toutes les questions que vous pourriez avoir.';
    } else if (userInput.includes('alimentation')) {
        response = 'Une alimentation équilibrée est essentielle pour maintenir une bonne santé. Essayez d\'inclure des fruits, des légumes, des protéines maigres et des grains entiers dans votre alimentation.';
    } else if (userInput.includes('activité physique') || userInput.includes('sport')) {
        response = 'L\'activité physique est importante pour votre bien-être général. Essayez de faire au moins 30 minutes d\'exercice modéré chaque jour, comme la marche, le vélo ou le yoga.';
    } else if (userInput.includes('sens')) {
        response = 'Trouver un sens à votre vie peut améliorer votre bien-être. Pensez à ce qui est important pour vous et comment vous pouvez y consacrer du temps et de l\'énergie.';
    } else if (userInput.includes('stress')) {
        response = 'Le stress peut avoir un impact négatif sur votre santé mentale et physique. Voici quelques techniques pour vous aider à le gérer : \n\n- **Respiration en carré** : Inspirez pendant 4 secondes, retenez votre souffle pendant 4 secondes, expirez pendant 4 secondes, puis retenez votre souffle pendant 4 secondes. Répétez plusieurs fois. \n- **Balade en pleine nature** : Prenez un moment pour vous promener dans un parc ou une forêt, et essayez de vous concentrer sur les sons et les odeurs de la nature. \n- **Journal de gratitude** : Écrivez chaque jour trois choses pour lesquelles vous êtes reconnaissant. Cela peut aider à réduire le stress et à améliorer votre humeur.';
    } else if (userInput.includes('angoisse')) {
        response = 'L\'angoisse est une réaction normale au stress, mais si elle devient trop intense ou fréquente, elle peut être un signe d\'un trouble anxieux. Voici quelques exercices de relaxation : \n\n- **Respiration alternée par les narines** : Asseyez-vous confortablement. Fermez la narine droite avec le pouce droit et inspirez par la narine gauche. Fermez la narine gauche avec l\'annulaire droit et expirez par la narine droite. Répétez plusieurs fois. \n- **Ancrage** : Concentrez-vous sur votre environnement immédiat. Notez mentalement cinq choses que vous pouvez voir, quatre choses que vous pouvez toucher, trois choses que vous pouvez entendre, deux choses que vous pouvez sentir et une chose que vous pouvez goûter.';
    } else if (userInput.includes('sommeil')) {
        response = 'Le sommeil est essentiel pour votre santé et votre bien-être. Essayez ces conseils pour améliorer votre sommeil : \n\n- **Routine de coucher** : Allez vous coucher et réveillez-vous à la même heure chaque jour. \n- **Ambiance relaxante** : Créez une atmosphère relaxante dans votre chambre, avec une lumière tamisée et une température fraîche. \n- **Déconnexion** : Évitez les écrans (téléphone, ordinateur, télévision) au moins une heure avant de dormir.';
    } else if (userInput.includes('environnement')) {
        response = 'Votre environnement peut avoir un impact significatif sur votre bien-être. Assurez-vous que votre espace de vie est propre, organisé et apaisant.';
    } else if (userInput.includes('soins de support')) {
        response = 'Les soins de support comprennent une variété de services qui aident à gérer les effets du cancer et de son traitement. Parlez à votre médecin des options disponibles pour vous.';
    } else if (userInput.includes('parler')) {
        response = 'Bien sûr, je suis présent pour toi. Parle-moi de ce que tu ressens ou de ce qui te préoccupe.';
    } else if (userInput.includes('solitude')) {
        response = 'La solitude peut être très difficile à gérer. Essayez de rester en contact avec vos amis et votre famille. Même un simple message ou appel peut faire une grande différence.';
    } else if (userInput.includes('colère')) {
        response = 'La colère est une émotion naturelle, mais il est important de la gérer de manière saine. Essayez ces techniques : \n\n- **Respiration profonde** : Inspirez profondément par le nez, retenez votre souffle pendant quelques secondes, puis expirez lentement par la bouche. \n- **Exercice physique** : Faites une activité physique qui vous plaît, comme la marche rapide, le jogging ou le yoga. \n- **Écriture** : Notez ce qui vous met en colère et comment vous vous sentez. Parfois, mettre des mots sur nos émotions peut aider à les apaiser.';
    } else if (userInput.includes('motivation')) {
        response = 'Il est normal de manquer de motivation parfois. Voici quelques conseils pour la retrouver : \n\n- **Petits objectifs** : Fixez-vous de petits objectifs réalisables et célébrez chaque succès, peu importe sa taille. \n- **Routine** : Établissez une routine quotidienne pour structurer votre journée. \n- **Inspiration** : Lisez des citations inspirantes ou regardez des vidéos de personnes qui vous motivent.';
    } else if (userInput.includes('espoir')) {
        response = 'Garder espoir est essentiel, même dans les moments difficiles. Souvenez-vous que chaque jour est une nouvelle opportunité pour aller mieux.';
    } else if (userInput.includes('courage')) {
        response = 'Il faut beaucoup de courage pour affronter les défis de la vie. Vous êtes plus fort que vous ne le pensez et chaque petit pas compte.';
    } else if (userInput.includes('addiction')) {
        response = 'L\'addiction est une maladie complexe, mais il est possible de s\'en sortir. Voici quelques conseils : \n\n- **Remplacez les habitudes** : Trouvez des activités saines pour remplacer les habitudes de consommation. Par exemple, allez faire une promenade, lisez un livre ou faites du sport. \n- **Soutien** : Parlez à des amis ou à des membres de votre famille de confiance qui peuvent vous soutenir. \n- **Groupes de soutien** : Rejoignez un groupe de soutien en ligne ou en personne pour partager vos expériences et obtenir des conseils.';
    } else if (userInput.includes('alcool') || userInput.includes('drogue') || userInput.includes('tabac')) {
        response = 'La lutte contre l\'addiction à l\'alcool, aux drogues ou au tabac peut être très difficile. Voici quelques conseils : \n\n- **Remplacez les habitudes** : Trouvez des activités saines pour remplacer les habitudes de consommation. Par exemple, allez faire une promenade, lisez un livre ou faites du sport. \n- **Soutien** : Parlez à des amis ou à des membres de votre famille de confiance qui peuvent vous soutenir. \n- **Groupes de soutien** : Rejoignez un groupe de soutien en ligne ou en personne pour partager vos expériences et obtenir des conseils.';
    } else if (userInput.includes('sexe') || userInput.includes('sexothérapie')) {
        response = 'La sexothérapie peut aider à améliorer votre bien-être sexuel et relationnel. Voici quelques conseils pour améliorer votre vie sexuelle : \n\n- **Communication** : Parlez ouvertement avec votre partenaire de vos désirs et de vos préoccupations. \n- **Intimité émotionnelle** : Travaillez sur l\'intimité émotionnelle avec votre partenaire, par exemple en passant du temps de qualité ensemble. \n- **Éducation** : Renseignez-vous sur la santé sexuelle et explorez ce qui fonctionne pour vous et votre partenaire.';
    } else if (userInput.includes('problèmes sexuels') || userInput.includes('dysfonctionnement érectile') || userInput.includes('libido')) {
        response = 'Les problèmes sexuels peuvent être source de stress et d\'anxiété. Voici quelques conseils pour les gérer : \n\n- **Relaxation** : Essayez des techniques de relaxation comme la respiration profonde ou la méditation avant les rapports sexuels. \n- **Éducation** : Renseignez-vous sur les causes possibles de vos problèmes sexuels et explorez des solutions adaptées. \n- **Santé physique** : Assurez-vous de maintenir une bonne santé physique en faisant de l\'exercice régulièrement et en mangeant équilibré.';
    } else {
        response = 'Désolé, je ne comprends pas votre demande. Pouvez-vous reformuler?';
    }

    addMessage('Bot', response);
}

window.addEventListener('load', () => {
    addMessage('Bot', 'Bienvenue sur Les Heures Kintsugi. Comment puis-je vous aider aujourd\'hui ?');
});

document.getElementById('user-input').addEventListener('keypress', async (e) => {
    if (e.key === 'Enter') {
        const userInput = document.getElementById('user-input').value;
        document.getElementById('user-input').value = '';
        addMessage('User', userInput);
        await respondToUser(userInput);
    }
});
