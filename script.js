// --- Vocabulary Data ---
const vocabulary = [
    { word: 'abate', meaning: 'To reduce in intensity or amount.' },
    { word: 'abnegate', meaning: 'To reject or renounce something.' },
    { word: 'abrasive', meaning: 'Rough or harsh in manner or texture.' },
    { word: 'abridge', meaning: 'To shorten a text without losing the essence.' },
    { word: 'abrogate', meaning: 'To formally abolish or repeal.' },
    { word: 'absolve', meaning: 'To free from blame or responsibility.' },
    { word: 'abundant', meaning: 'Existing in large quantities.' },
    { word: 'accessible', meaning: 'Easy to approach or use.' },
    { word: 'accommodate', meaning: 'To provide space or adjust to needs.' },
    { word: 'accost', meaning: 'To approach and speak to someone aggressively.' },
    { word: 'accrue', meaning: 'To accumulate over time.' },
    { word: 'accumulate', meaning: 'To gather or collect gradually.' },
    { word: 'adamant', meaning: 'Firm and unyielding in opinion.' },
    { word: 'adjacent', meaning: 'Next to or adjoining.' },
    { word: 'adjudicate', meaning: 'To make a formal judgment or decision.' },
    { word: 'adulation', meaning: 'Excessive praise or flattery.' },
    { word: 'aesthetic', meaning: 'Concerned with beauty or artistic expression.' },
    { word: 'affable', meaning: 'Friendly and easy to talk to.' },
    { word: 'aghast', meaning: 'Filled with shock or horror.' },
    { word: 'agnostic', meaning: 'Someone uncertain about the existence of God.' },
    { word: 'alcove', meaning: 'A small recessed section of a room.' },
    { word: 'alleviate', meaning: 'To make something less severe.' },
    { word: 'altruism', meaning: 'Selfless concern for the well-being of others.' },
    { word: 'ambidextrous', meaning: 'Able to use both hands equally well.' },
    { word: 'ambitious', meaning: 'Having a strong desire to succeed.' },
    { word: 'amicable', meaning: 'Friendly and without conflict.' },
    { word: 'apprehensive', meaning: 'Anxious or fearful about the future.' },
    { word: 'apprise', meaning: 'To inform or notify.' },
    { word: 'aptitude', meaning: 'Natural ability or talent.' },
    { word: 'aspersion', meaning: 'An attack on someone’s reputation.' },
    { word: 'asphyxiate', meaning: 'To suffocate or cause to stop breathing.' },
    { word: 'assert', meaning: 'To state confidently.' },
    { word: 'augment', meaning: 'To increase or add to.' },
    { word: 'auspicious', meaning: 'Favorable or promising.' },
    { word: 'austere', meaning: 'Severe or strict in manner or appearance.' },
    { word: 'arbiter', meaning: 'A person who settles disputes or has ultimate authority.' },
    { word: 'arcane', meaning: 'Mysterious or known only to a few.' },
    { word: 'archetype', meaning: 'A typical example or original model.' },
    { word: 'arduous', meaning: 'Requiring great effort; difficult.' },
    { word: 'armistice', meaning: 'An agreement to stop fighting; a truce.' },
    { word: 'articulate', meaning: 'Able to speak clearly and expressively.' },
    { word: 'ascertain', meaning: 'To find out for certain.' },
    { word: 'ascetic', meaning: 'Practicing strict self-discipline, often for religious reasons.' },
    { word: 'auxiliary', meaning: 'Providing supplementary help or support.' },
    { word: 'avarice', meaning: 'Extreme greed for wealth or material gain.' },
    { word: 'avid', meaning: 'Enthusiastic or eager.' },
    { word: 'axiom', meaning: 'A self-evident truth or universally accepted principle.' },
    { word: 'baccalaureate', meaning: 'A degree or diploma awarded upon completion of undergraduate studies.' },
    { word: 'baleful', meaning: 'Threatening harm or evil.' },
    { word: 'balustrade', meaning: 'A railing supported by balusters, especially on a balcony or staircase.' },
    { word: 'bamboozle', meaning: 'To deceive or trick.' },
    { word: 'banquet', meaning: 'A large formal meal or feast.' },
    { word: 'barricade', meaning: 'A barrier set up to block passage.' },
    { word: 'berate', meaning: 'To scold or criticize harshly.' },
    { word: 'besiege', meaning: 'To surround and attack.' },
    { word: 'bibliography', meaning: 'A list of sources or references used in a work.' },
    { word: 'biennial', meaning: 'Occurring every two years.' },
    { word: 'bifurcate', meaning: 'To divide into two branches or parts.' },
    { word: 'blasphemy', meaning: 'Irreverence toward something sacred.' },
    { word: 'boisterous', meaning: 'Noisy and energetic.' },
    { word: 'bolster', meaning: 'To support or strengthen.' },
    { word: 'boorish', meaning: 'Rude or insensitive.' },
    { word: 'brevity', meaning: 'Conciseness in speech or writing.' },
    { word: 'bucolic', meaning: 'Relating to the pleasant aspects of the countryside.' },
    { word: 'buoyant', meaning: 'Cheerful and able to float.' },
    { word: 'burgeon', meaning: 'To grow or develop rapidly.' },
    { word: 'cacophony', meaning: 'A harsh, discordant mixture of sounds.' },
    { word: 'cadence', meaning: 'A rhythmic flow of sounds or words.' },
    { word: 'calumny', meaning: 'A false and malicious statement.' },
    { word: 'capitulate', meaning: 'To surrender under agreed conditions.' },
    { word: 'carnivorous', meaning: 'Flesh-eating.' },
    { word: 'carouse', meaning: 'To party or drink excessively.' },
    { word: 'catastrophe', meaning: 'A sudden disaster.' },
    { word: 'caustic', meaning: 'Sarcastic or corrosive.' },
    { word: 'cavort', meaning: 'To jump or dance playfully.' },
    { word: 'celestial', meaning: 'Relating to the sky or heavens.' },
    { word: 'censure', meaning: 'To express strong disapproval.' },
    { word: 'cerebral', meaning: 'Intellectual rather than emotional.' },
    { word: 'charisma', meaning: 'Personal charm or appeal.' },
    { word: 'chicanery', meaning: 'Trickery or deception.' },
    { word: 'chronological', meaning: 'Arranged according to time order.' },
    { word: 'churlish', meaning: 'Rude or ill-mannered.' },
    { word: 'circumference', meaning: 'The distance around a circle.' },
    { word: 'circumspect', meaning: 'Cautious and careful.' },
    { word: 'clairvoyant', meaning: 'Having the ability to see the future.' },
    { word: 'clandestine', meaning: 'Secret and concealed.' },
    { word: 'clemency', meaning: 'Mercy or lenience.' },
    { word: 'coalesce', meaning: 'To come together to form one mass or whole.' },
    { word: 'cognizant', meaning: 'Having knowledge or awareness.' },
    { word: 'colloquial', meaning: 'Used in ordinary or informal conversation.' },
    { word: 'commensurate', meaning: 'Corresponding in size or degree.' },
    { word: 'commiserate', meaning: 'To express sympathy.' },
    { word: 'compatible', meaning: 'Able to exist or work together.' },
    { word: 'compendium', meaning: 'A concise summary.' },
    { word: 'complacent', meaning: 'Self-satisfied and unconcerned.' },
    { word: 'concentric', meaning: 'Sharing a common center.' },
    { word: 'conciliatory', meaning: 'Intended to placate or pacify.' },
    { word: 'conflagration', meaning: 'A large destructive fire.' },
    { word: 'congenial', meaning: 'Pleasant and agreeable.' },
    { word: 'consensus', meaning: 'General agreement.' },
    { word: 'consign', meaning: 'To deliver or assign.' },
    { word: 'conspicuous', meaning: 'Easily seen or noticed.' },
    { word: 'constituent', meaning: 'A component or part of something.' },
    { word: 'contagious', meaning: 'Able to be transmitted by contact.' },
    { word: 'contention', meaning: 'Disagreement or dispute.' },
    { word: 'contumacious', meaning: 'Stubbornly disobedient.' },
    { word: 'conundrum', meaning: 'A confusing or difficult problem.' },
    { word: 'corroborate', meaning: 'To confirm or support with evidence.' },
    { word: 'cosmopolitan', meaning: 'Familiar with many cultures; worldly.' },
    { word: 'counterfeit', meaning: 'Fake or forged.' },
    { word: 'courteous', meaning: 'Polite and respectful.' },
    { word: 'credence', meaning: 'Belief or trust.' },
    { word: 'credible', meaning: 'Believable or trustworthy.' },
    { word: 'credulous', meaning: 'Gullible or too trusting.' },
    { word: 'culinary', meaning: 'Related to cooking.' },
    { word: 'culminate', meaning: 'To reach the highest point or climax.' },
    { word: 'cultivate', meaning: 'To nurture or develop.' },
    { word: 'cynical', meaning: 'Distrusting or pessimistic about human motives.' },
    { word: 'decipher', meaning: 'To decode or interpret.' },
    { word: 'decisive', meaning: 'Conclusive or resolute.' },
    { word: 'decorum', meaning: 'Proper behavior or etiquette.' },
    { word: 'deduce', meaning: 'To infer or conclude from evidence.' },
    { word: 'defamatory', meaning: 'Damaging to reputation.' },
    { word: 'delineate', meaning: 'To describe or outline precisely.' },
    { word: 'deluge', meaning: 'A flood or overwhelming amount.' },
    { word: 'demeanor', meaning: 'Outward behavior or manner.' },
    { word: 'demise', meaning: 'Death or end.' },
    { word: 'deplete', meaning: 'To use up or reduce drastically.' },
    { word: 'derogatory', meaning: 'Expressing a low opinion.' },
    { word: 'despondent', meaning: 'Feeling hopeless or depressed.' },
    { word: 'destitute', meaning: 'Extremely poor or lacking basic necessities.' },
    { word: 'desultory', meaning: 'Lacking a plan or purpose; random.' },
    { word: 'deteriorate', meaning: 'To become worse over time.' },
    { word: 'detrimental', meaning: 'Causing harm or damage.' },
    { word: 'dexterity', meaning: 'Skill in performing tasks, especially with hands.' },
    { word: 'diaphanous', meaning: 'Light, delicate, and translucent.' },
    { word: 'diaphragm', meaning: 'A muscle that helps with breathing.' },
    { word: 'diatribe', meaning: 'A bitter verbal attack.' },
    { word: 'dichotomy', meaning: 'A division into two contrasting parts.' },
    { word: 'didactic', meaning: 'Intended to teach or instruct.' },
    { word: 'diminutive', meaning: 'Very small or tiny.' },
    { word: 'discrepancy', meaning: 'A difference or inconsistency.' },
    { word: 'discriminate', meaning: 'To differentiate unfairly.' },
    { word: 'disparage', meaning: 'To belittle or speak negatively about.' },
    { word: 'disparity', meaning: 'A great difference or inequality.' },
    { word: 'dissemble', meaning: 'To conceal one\'s true motives or feelings.' },
    { word: 'dissonance', meaning: 'Lack of harmony or agreement.' },
    { word: 'divergent', meaning: 'Moving or extending in different directions.' },
    { word: 'divisive', meaning: 'Causing disagreement or hostility.' },
    { word: 'dormant', meaning: 'Inactive or asleep.' },
    { word: 'edifice', meaning: 'A large or impressive building.' },
    { word: 'efficacious', meaning: 'Effective; producing the desired result.' },
    { word: 'effrontery', meaning: 'Shameless boldness.' },
    { word: 'effulgent', meaning: 'Radiantly shining; brilliant.' },
    { word: 'elucidate', meaning: 'To make clear or explain.' },
    { word: 'emaciated', meaning: 'Extremely thin and weak.' },
    { word: 'embellish', meaning: 'To decorate or add details.' },
    { word: 'eminent', meaning: 'Famous and respected.' },
    { word: 'empirical', meaning: 'Based on observation or experience.' },
    { word: 'endemic', meaning: 'Native or restricted to a certain place.' },
    { word: 'endurance', meaning: 'The ability to withstand hardship.' },
    { word: 'enervate', meaning: 'To weaken or drain of energy.' },
    { word: 'enlighten', meaning: 'To inform or give knowledge.' },
    { word: 'enunciate', meaning: 'To pronounce clearly.' },
    { word: 'epitome', meaning: 'A perfect example or embodiment.' },
    { word: 'equanimity', meaning: 'Calmness and composure, especially in difficult situations.' },
    { word: 'esoteric', meaning: 'Intended for or understood by only a few.' },
    { word: 'ethereal', meaning: 'Extremely delicate and light.' },
    { word: 'euphemism', meaning: 'A mild or indirect word substituted for one considered harsh.' },
    { word: 'exacerbate', meaning: 'To make worse.' },
    { word: 'exasperate', meaning: 'To irritate or annoy greatly.' },
    { word: 'exemplary', meaning: 'Worthy of imitation; outstanding.' },
    { word: 'expedient', meaning: 'Convenient and practical, though possibly improper.' },
    { word: 'exquisite', meaning: 'Extremely beautiful and delicate.' },
    { word: 'extirpate', meaning: 'To completely destroy or remove.' },
    { word: 'extraneous', meaning: 'Irrelevant or unrelated.' },
    { word: 'exuberant', meaning: 'Filled with lively energy and excitement.' },
    { word: 'fabulous', meaning: 'Extremely good or wonderful.' },
    { word: 'facilitate', meaning: 'To make easier.' },
    { word: 'fallacious', meaning: 'Based on a mistaken belief.' },
    { word: 'fallible', meaning: 'Capable of making mistakes.' },
    { word: 'fanatical', meaning: 'Extremely enthusiastic or obsessed.' },
    { word: 'fathom', meaning: 'To understand deeply.' },
    { word: 'fatuous', meaning: 'Silly and pointless.' },
    { word: 'feasible', meaning: 'Possible to do easily or conveniently.' },
    { word: 'fecund', meaning: 'Fertile or productive.' },
    { word: 'feign', meaning: 'To pretend or fake.' },
    { word: 'finesse', meaning: 'Skillful handling of a situation.' },
    { word: 'flabbergast', meaning: 'To astonish or shock.' },
    { word: 'fluctuate', meaning: 'To vary irregularly.' },
    { word: 'flummox', meaning: 'To confuse or perplex.' },
    { word: 'forlorn', meaning: 'Lonely and abandoned.' },
    { word: 'fortitude', meaning: 'Courage in adversity.' },
    { word: 'fractious', meaning: 'Irritable and quarrelsome.' },
    { word: 'frugal', meaning: 'Economical and sparing.' },
    { word: 'furtive', meaning: 'Secretive and sly.' },
    { word: 'gambit', meaning: 'A strategic move, often risky.' },
    { word: 'garrulous', meaning: 'Excessively talkative.' },
    { word: 'genealogy', meaning: 'Study of family history.' },
    { word: 'generosity', meaning: 'Willingness to give or share.' },
    { word: 'gentrify', meaning: 'To renovate a neighborhood, often displacing residents.' },
    { word: 'gesticulate', meaning: 'To make gestures while speaking.' },
    { word: 'gluttonous', meaning: 'Excessively greedy in eating or drinking.' },
    { word: 'gourmand', meaning: 'A person who enjoys eating and often eats excessively.' },
    { word: 'gregarious', meaning: 'Sociable and outgoing.' },
    { word: 'grievous', meaning: 'Very serious or severe.' },
    { word: 'harangue', meaning: 'A lengthy and aggressive speech.' },
    { word: 'haughty', meaning: 'Arrogantly superior.' },
    { word: 'hierarchy', meaning: 'A system in which people are ranked according to status or authority.' },
    { word: 'histrionic', meaning: 'Overly dramatic or theatrical.' },
    { word: 'hubris', meaning: 'Excessive pride or self-confidence.' },
    { word: 'humility', meaning: 'Modesty or humbleness.' },
    { word: 'hypocrisy', meaning: 'Pretending to have virtues one does not possess.' },
    { word: 'hypothetical', meaning: 'Based on a theory or assumption.' },
    { word: 'iconoclast', meaning: 'Someone who attacks established beliefs.' },
    { word: 'illicit', meaning: 'Illegal or forbidden.' },
    { word: 'illuminate', meaning: 'To light up or make clear.' },
    { word: 'illustrious', meaning: 'Highly distinguished or famous.' },
    { word: 'imbibe', meaning: 'To drink, especially alcohol.' },
    { word: 'immaculate', meaning: 'Spotlessly clean or perfect.' },
    { word: 'imminent', meaning: 'About to happen.' },
    { word: 'impartial', meaning: 'Unbiased or neutral.' },
    { word: 'impede', meaning: 'To obstruct or slow down.' },
    { word: 'implicit', meaning: 'Implied though not directly expressed.' },
    { word: 'importunate', meaning: 'Persistent to the point of annoyance.' },
    { word: 'impregnable', meaning: 'Unable to be captured or broken into.' },
    { word: 'impudent', meaning: 'Boldly disrespectful.' },
    { word: 'inadvertent', meaning: 'Unintentional or accidental.' },
    { word: 'inane', meaning: 'Silly or senseless.' },
    { word: 'incandescent', meaning: 'Emitting light as a result of being heated.' },
    { word: 'incapacitate', meaning: 'To prevent from functioning normally.' },
    { word: 'incendiary', meaning: 'Designed to cause fires; tending to stir up conflict.' },
    { word: 'incessant', meaning: 'Continuing without interruption.' },
    { word: 'incipient', meaning: 'In an initial stage; beginning to happen.' },
    { word: 'incognito', meaning: 'In disguise or with identity concealed.' },
    { word: 'indelible', meaning: 'Cannot be removed or forgotten.' },
    { word: 'indigenous', meaning: 'Native to a particular region.' },
    { word: 'indiscriminate', meaning: 'Done without careful judgment.' },
    { word: 'indolent', meaning: 'Lazy or avoiding activity.' },
    { word: 'inept', meaning: 'Lacking skill or ability.' },
    { word: 'inevitable', meaning: 'Certain to happen.' },
    { word: 'inexorable', meaning: 'Impossible to stop or prevent.' },
    { word: 'infamous', meaning: 'Well known for a bad reason.' },
    { word: 'infinitesimal', meaning: 'Extremely small.' },
    { word: 'inherent', meaning: 'Existing as a natural part.' },
    { word: 'inhibit', meaning: 'To hold back or restrain.' },
    { word: 'inimical', meaning: 'Hostile or harmful.' },
    { word: 'iniquitous', meaning: 'Wicked or morally wrong.' },
    { word: 'innocuous', meaning: 'Harmless or not offensive.' },
    { word: 'insatiable', meaning: 'Impossible to satisfy.' },
    { word: 'insinuate', meaning: 'To suggest indirectly.' },
    { word: 'insolent', meaning: 'Rude or disrespectful.' },
    { word: 'instigate', meaning: 'To provoke or start something.' },
    { word: 'integrity', meaning: 'Honesty and strong moral principles.' },
    { word: 'intractable', meaning: 'Difficult to manage or control.' },
    { word: 'intricate', meaning: 'Very detailed and complex.' },
    { word: 'inundate', meaning: 'To overwhelm or flood.' },
    { word: 'invincible', meaning: 'Impossible to defeat.' },
    { word: 'iridescent', meaning: 'Showing rainbow-like colors.' },
    { word: 'irrelevant', meaning: 'Not related to the subject.' },
    { word: 'judicious', meaning: 'Showing good judgment.' },
    { word: 'kaleidoscope', meaning: 'A constantly changing pattern or sequence.' },
    { word: 'labyrinth', meaning: 'A complicated network of paths or passages.' },
    { word: 'lacerate', meaning: 'To tear or cut roughly.' },
    { word: 'laconic', meaning: 'Using few words; concise.' },
    { word: 'lambaste', meaning: 'To criticize harshly.' },
    { word: 'lament', meaning: 'To express sorrow or regret.' },
    { word: 'laudable', meaning: 'Worthw of praise.' },
    { word: 'legacy', meaning: 'Something handed down from the past.' },
    { word: 'lethargic', meaning: 'Sluggish and lacking energy.' },
    { word: 'lethargy', meaning: 'A state of tiredness or inactivity.' },
    { word: 'liaison', meaning: 'A connection or link between people or groups.' },
    { word: 'libel', meaning: 'A written false statement damaging to a person\'s reputation.' },
    { word: 'lilliputian', meaning: 'Extremely small or tiny.' },
    { word: 'linger', meaning: 'To stay longer than necessary.' },
    { word: 'maladroit', meaning: 'Clumsy or awkward.' },
    { word: 'malaise', meaning: 'A general feeling of discomfort or unease.' },
    { word: 'malevolent', meaning: 'Having or showing a wish to do evil.' },
    { word: 'malleable', meaning: 'Capable of being shaped or influenced.' },
    { word: 'mammoth', meaning: 'Huge or gigantic.' },
    { word: 'maudlin', meaning: 'Overly sentimental.' },
    { word: 'maverick', meaning: 'An independent thinker or rebel.' },
    { word: 'melancholy', meaning: 'A deep, persistent sadness.' },
    { word: 'modicum', meaning: 'A small amount.' },
    { word: 'mollify', meaning: 'To soothe or calm.' },
    { word: 'morbid', meaning: 'Having an unhealthy interest in death or disease.' },
    { word: 'mundane', meaning: 'Ordinary or dull.' },
    { word: 'munificent', meaning: 'Very generous.' },
    { word: 'myriad', meaning: 'Countless or very many.' },
    { word: 'nascent', meaning: 'Just coming into existence.' },
    { word: 'nefarious', meaning: 'Wicked or criminal.' },
    { word: 'negligent', meaning: 'Careless or neglectful.' },
    { word: 'neophyte', meaning: 'A beginner or novice.' },
    { word: 'nostalgia', meaning: 'A sentimental longing for the past.' },
    { word: 'noxious', meaning: 'Harmful or poisonous.' },
    { word: 'nuance', meaning: 'A subtle difference or distinction.' },
    { word: 'nullify', meaning: 'To make legally void or cancel out.' },
    { word: 'obfuscate', meaning: 'To confuse or make unclear.' },
    { word: 'obsequious', meaning: 'Excessively eager to please or obey.' },
    { word: 'obsolete', meaning: 'Outdated or no longer in use.' },
    { word: 'obstinate', meaning: 'Stubbornly refusing to change.' },
    { word: 'omniscient', meaning: 'All-knowing.' },
    { word: 'opaque', meaning: 'Not transparent or hard to understand.' },
    { word: 'opulent', meaning: 'Rich and luxurious.' },
    { word: 'oscillate', meaning: 'To swing back and forth.' },
    { word: 'ostensible', meaning: 'Apparent or supposed.' },
    { word: 'outlandish', meaning: 'Strange or bizarre.' },
    { word: 'pacify', meaning: 'To calm or soothe.' },
    { word: 'paradox', meaning: 'A statement that seems contradictory but may be true.' },
    { word: 'paragon', meaning: 'A model of excellence.' },
    { word: 'paramount', meaning: 'Of greatest importance.' },
    { word: 'pensive', meaning: 'Deeply thoughtful, often sad.' },
    { word: 'peremptory', meaning: 'Insisting on immediate attention or obedience.' },
    { word: 'perennial', meaning: 'Lasting for a long time or recurring.' },
    { word: 'perfidious', meaning: 'Treacherous or deceitful.' },
    { word: 'peripheral', meaning: 'On the edge or not central.' },
    { word: 'perjury', meaning: 'Lying under oath.' },
    { word: 'permeate', meaning: 'To spread throughout or penetrate.' },
    { word: 'pernicious', meaning: 'Harmful or deadly.' },
    { word: 'perpetual', meaning: 'Never-ending or continuous.' },
    { word: 'persevere', meaning: 'To persist despite difficulties.' },
    { word: 'personify', meaning: 'To represent or embody a quality.' },
    { word: 'pertinent', meaning: 'Relevant or applicable.' },
    { word: 'pervasive', meaning: 'Widespread or prevalent.' },
    { word: 'pessimistic', meaning: 'Expecting the worst outcome.' },
    { word: 'philanthropic', meaning: 'Charitable or generous.' },
    { word: 'philistine', meaning: 'Someone indifferent to culture or arts.' },
    { word: 'phlegmatic', meaning: 'Calm and unemotional.' },
    { word: 'picturesque', meaning: 'Visually charming or quaint.' },
    { word: 'pious', meaning: 'Devoutly religious.' },
    { word: 'pivotal', meaning: 'Crucial or central to success.' },
    { word: 'placate', meaning: 'To calm or appease.' },
    { word: 'platitude', meaning: 'A dull or overused remark.' },
    { word: 'plethora', meaning: 'An excessive amount.' },
    { word: 'poignant', meaning: 'Emotionally touching or moving.' },
    { word: 'polarize', meaning: 'To divide sharply into opposing groups.' },
    { word: 'polemic', meaning: 'A strong verbal or written attack.' },
    { word: 'posthumous', meaning: 'Occurring after death.' },
    { word: 'potent', meaning: 'Powerful or effective.' },
    { word: 'pragmatic', meaning: 'Practical and realistic.' },
    { word: 'precarious', meaning: 'Unstable or risky.' },
    { word: 'precipitate', meaning: 'To cause something to happen suddenly.' },
    { word: 'preclude', meaning: 'To prevent or make impossible.' },
    { word: 'precocious', meaning: 'Having developed abilities at an earlier age than usual.' },
    { word: 'predicament', meaning: 'A difficult, unpleasant, or embarrassing situation.' },
    { word: 'presumptuous', meaning: 'Too bold; arrogant.' },
    { word: 'pretentious', meaning: 'Attempting to impress by affecting greater importance or talent than is actually possessed.' },
    { word: 'prevalent', meaning: 'Widespread or common.' },
    { word: 'proficient', meaning: 'Skilled or competent.' },
    { word: 'profound', meaning: 'Deep or intense.' },
    { word: 'prolific', meaning: 'Producing many works or results.' },
    { word: 'prolix', meaning: 'Using too many words; long-winded.' },
    { word: 'prominent', meaning: 'Important or well-known.' },
    { word: 'promulgate', meaning: 'To officially announce or make known.' },
    { word: 'propensity', meaning: 'A natural tendency or inclination.' },
    { word: 'prototype', meaning: 'An original model or first version.' },
    { word: 'provident', meaning: 'Preparing for the future; frugal.' },
    { word: 'proximity', meaning: 'Nearness in space or time.' },
    { word: 'prudent', meaning: 'Wise and careful in decision-making.' },
    { word: 'puerile', meaning: 'Childishly silly or trivial.' },
    { word: 'pungent', meaning: 'Having a strong, sharp smell or taste.' },
    { word: 'purloin', meaning: 'To steal.' },
    { word: 'pusillanimous', meaning: 'Cowardly or lacking courage.' },
    { word: 'quagmire', meaning: 'A difficult or precarious situation.' },
    { word: 'quandary', meaning: 'A state of uncertainty or confusion.' },
    { word: 'quarantine', meaning: 'Isolation to prevent disease spread.' },
    { word: 'querulous', meaning: 'Complaining in a whining manner.' },
    { word: 'quiescent', meaning: 'Inactive or dormant.' },
    { word: 'reciprocal', meaning: 'Given or felt by both sides.' },
    { word: 'reclusive', meaning: 'Preferring to live in isolation.' },
    { word: 'reconcile', meaning: 'To restore friendly relations.' },
    { word: 'rejuvenate', meaning: 'To make young or fresh again.' },
    { word: 'relegate', meaning: 'To assign to a lower position.' },
    { word: 'reminisce', meaning: 'To recall past experiences.' },
    { word: 'remunerate', meaning: 'To pay for work or services.' },
    { word: 'rendezvous', meaning: 'A meeting at an agreed time and place.' },
    { word: 'renovate', meaning: 'To restore or improve.' },
    { word: 'repudiate', meaning: 'To reject or disown.' },
    { word: 'rescind', meaning: 'To revoke or cancel.' },
    { word: 'resolute', meaning: 'Determined and unwavering.' },
    { word: 'reticent', meaning: 'Reserved or reluctant to speak.' },
    { word: 'retrospect', meaning: 'Looking back on past events.' },
    { word: 'reverie', meaning: 'A state of dreamy meditation.' },
    { word: 'rhetoric', meaning: 'The art of persuasive speaking or writing.' },
    { word: 'ruminate', meaning: 'To think deeply or meditate.' },
    { word: 'sacrosanct', meaning: 'Extremely sacred or inviolable.' },
    { word: 'sagacity', meaning: 'Wisdom or keen perception.' },
    { word: 'salient', meaning: 'Most noticeable or important.' },
    { word: 'salutary', meaning: 'Beneficial or promoting health.' },
    { word: 'sanguine', meaning: 'Optimistic or hopeful.' },
    { word: 'sardonic', meaning: 'Grimly mocking or cynical.' },
    { word: 'scintillating', meaning: 'Sparkling or brilliantly clever.' },
    { word: 'scrupulous', meaning: 'Very careful and honest.' },
    { word: 'scurrilous', meaning: 'Vulgar or abusive.' },
    { word: 'seclude', meaning: 'To isolate or keep apart.' },
    { word: 'stagnant', meaning: 'Not flowing or moving; inactive.' },
    { word: 'steadfast', meaning: 'Firmly loyal or unwavering.' },
    { word: 'subversive', meaning: 'Tending to undermine or overthrow.' },
    { word: 'succinct', meaning: 'Briefly and clearly expressed.' },
    { word: 'surreptitious', meaning: 'Kept secret, especially because it would not be approved of.' },
    { word: 'susceptible', meaning: 'Likely to be influenced or harmed.' },
    { word: 'sycophant', meaning: 'A person who tries to win favor from wealthy or influential people by flattering them.' },
    { word: 'tawdry', meaning: 'Showy but cheap or of poor quality.' },
    { word: 'tedious', meaning: 'Boring and repetitive.' },
    { word: 'temperament', meaning: 'A person’s nature or disposition.' },
    { word: 'temporize', meaning: 'To delay or avoid making a decision.' },
    { word: 'tenuous', meaning: 'Weak or insubstantial.' },
    { word: 'terse', meaning: 'Brief and to the point.' },
    { word: 'thwart', meaning: 'To prevent or frustrate.' },
    { word: 'timorous', meaning: 'Fearful or timid.' },
    { word: 'tortuous', meaning: 'Full of twists and turns; complex.' },
    { word: 'tractable', meaning: 'Easily managed or controlled.' },
    { word: 'tranquil', meaning: 'Calm and peaceful.' },
    { word: 'transgress', meaning: 'To violate a law or moral code.' },
    { word: 'trenchant', meaning: 'Sharp and effective.' },
    { word: 'trepidation', meaning: 'Fear or anxiety about the future.' },
    { word: 'trite', meaning: 'Overused and unoriginal.' },
    { word: 'turbulent', meaning: 'Characterized by conflict or disorder.' },
    { word: 'turmoil', meaning: 'A state of great disturbance or confusion.' },
    { word: 'ubiquitous', meaning: 'Present everywhere at the same time.' },
    { word: 'unabashed', meaning: 'Not embarrassed or ashamed.' },
    { word: 'unanimous', meaning: 'Fully in agreement.' },
    { word: 'unassailable', meaning: 'Impossible to dispute or attack.' },
    { word: 'unconventional', meaning: 'Not following accepted norms.' },
    { word: 'unctuous', meaning: 'Excessively flattering or oily in manner.' },
    { word: 'undermine', meaning: 'To weaken or damage gradually.' },
    { word: 'undulate', meaning: 'To move in waves or with a wavelike motion.' },
    { word: 'unequivocal', meaning: 'Leaving no doubt; clear.' },
    { word: 'unfaltering', meaning: 'Steady and resolute.' },
    { word: 'unfeigned', meaning: 'Genuine; sincere.' },
    { word: 'unfettered', meaning: 'Free from restrictions.' },
    { word: 'unilateral', meaning: 'Performed by one side only.' },
    { word: 'unprecedented', meaning: 'Never done or known before.' },
    { word: 'unruly', meaning: 'Difficult to control or manage.' },
    { word: 'unwitting', meaning: 'Not aware of the full facts.' },
    { word: 'urbane', meaning: 'Suave, courteous, and refined in manner.' },
    { word: 'usurp', meaning: 'To take a position of power illegally or by force.' },
    { word: 'utilitarian', meaning: 'Designed for practical use rather than beauty.' },
    { word: 'vacillate', meaning: 'To waver between different opinions or actions.' },
    { word: 'vapid', meaning: 'Lacking liveliness or interest.' },
    { word: 'veracity', meaning: 'Truthfulness or accuracy.' },
    { word: 'verdant', meaning: 'Green with vegetation.' },
    { word: 'verisimilitude', meaning: 'The appearance of being true or real.' },
    { word: 'veritable', meaning: 'Real or genuine.' },
    { word: 'vernacular', meaning: 'The everyday language spoken by people.' },
    { word: 'vexation', meaning: 'The state of being annoyed or worried.' },
    { word: 'vicarious', meaning: 'Experienced through another person.' },
    { word: 'vicissitude', meaning: 'A change or variation in circumstances.' },
    { word: 'vigilant', meaning: 'Watchful and alert.' },
    { word: 'vilify', meaning: 'To speak ill of; defame.' },
    { word: 'vindicate', meaning: 'To clear from blame or suspicion.' },
    { word: 'virulent', meaning: 'Extremely harmful or poisonous.' },
    { word: 'visionary', meaning: 'Having foresight or imagination.' },
    { word: 'volatile', meaning: 'Unstable or likely to change rapidly.' },
    { word: 'voluminous', meaning: 'Very large or extensive.' },
    { word: 'wane', meaning: 'To decrease gradually.' },
    { word: 'wanton', meaning: 'Reckless or unprovoked.' },
    { word: 'wheedle', meaning: 'To coax or persuade by flattery.' },
    { word: 'whimsical', meaning: 'Playfully fanciful or quirky.' },
    { word: 'winsome', meaning: 'Charming and attractive.' },
    { word: 'wistful', meaning: 'Full of longing or nostalgia.' },
    { word: 'wither', meaning: 'To dry up or shrivel.' },
    { word: 'xenial', meaning: 'Hospitable, especially to strangers.' },
    { word: 'xenophobia', meaning: 'Fear or hatred of foreigners.' },
    { word: 'yearn', meaning: 'To have a strong desire or longing.' },
    { word: 'zealot', meaning: 'A fanatic or extremist.' },
    { word: 'zealous', meaning: 'Passionately devoted.' }
];


// --- Helper Functions ---

// Shuffle array (Fisher-Yates algorithm)
function shuffleArray(array) {
    const shuffled = [...array]; // Create a copy to avoid modifying the original array
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Swap elements
    }
    return shuffled;
}

// Get random items from an array without duplicates
function getRandomItems(arr, numItems, excludeItem = null) {
    const result = [];
    const availableItems = arr.filter(item => item !== excludeItem); // Filter out the excluded item
    if (availableItems.length < numItems) {
         console.warn(`Not enough unique items (${availableItems.length}) to select ${numItems} random items.`);
        // Fallback: return all available items if not enough
        return availableItems;
    }
    const shuffled = shuffleArray([...availableItems]); // Shuffle a copy
    return shuffled.slice(0, numItems);
}

// --- DOM Elements ---
const modeElements = {
    flashcard: document.getElementById('flashcard-mode'),
    mcq: document.getElementById('mcq-mode'),
    spelling: document.getElementById('spelling-mode')
};

const navButtons = {
    flashcards: document.getElementById('show-flashcards'),
    mcq: document.getElementById('show-mcq'),
    spelling: document.getElementById('show-spelling')
};

// Flashcard elements
const flashcardEl = document.getElementById('flashcard');
const flashcardWordEl = document.getElementById('flashcard-word');
const flashcardMeaningEl = document.getElementById('flashcard-meaning');
const flipCardBtn = document.getElementById('flip-card');
const prevCardBtn = document.getElementById('prev-card');
const nextCardBtn = document.getElementById('next-card');
const cardCounterEl = document.getElementById('card-counter');

// MCQ elements
const mcqWordEl = document.getElementById('mcq-word');
const mcqOptionsEl = document.getElementById('mcq-options');
const submitAnswerBtn = document.getElementById('submit-answer');
const mcqFeedbackEl = document.getElementById('mcq-feedback');
const nextMcqBtn = document.getElementById('next-mcq');
const mcqScoreEl = document.getElementById('mcq-score');
const restartMcqBtn = document.getElementById('restart-mcq');

// Spelling elements
const spellingSubModes = {
    teach: document.getElementById('spelling-teach'),
    test: document.getElementById('spelling-test')
};
const spellingSubNavButtons = {
    teach: document.getElementById('show-spelling-teach'),
    test: document.getElementById('show-spelling-test')
};

// Spelling Teach elements
const spellingTeachCardEl = document.getElementById('spelling-teach-card');
const spellingTeachWordFrontEl = document.getElementById('spelling-teach-word-front');
const spellingTeachMeaningFrontEl = document.getElementById('spelling-teach-meaning-front');
const spellingTeachInputEl = document.getElementById('spelling-teach-input');
const checkSpellingTeachBtn = document.getElementById('check-spelling-teach');
const spellingTeachFeedbackEl = document.getElementById('spelling-teach-feedback');
const flipSpellingTeachCardBtn = document.getElementById('flip-spelling-teach-card');
const prevSpellingTeachBtn = document.getElementById('prev-spelling-teach');
const nextSpellingTeachBtn = document.getElementById('next-spelling-teach');
const spellingTeachCounterEl = document.getElementById('spelling-teach-counter');
const spellingTeachScoreEl = document.getElementById('spelling-teach-score-display'); // Reference to score display


// Spelling Test elements
const spellingTestMeaningEl = document.getElementById('spelling-test-meaning');
const spellingTestInputEl = document.getElementById('spelling-test-input');
const checkSpellingTestBtn = document.getElementById('check-spelling-test');
const spellingTestFeedbackEl = document.getElementById('spelling-test-feedback');
const prevSpellingTestBtn = document.getElementById('prev-spelling-test');
const nextSpellingTestBtn = document.getElementById('next-spelling-test');
const spellingTestCounterEl = document.getElementById('spelling-test-counter');
const spellingTestScoreEl = document.getElementById('spelling-test-score');
const restartSpellingTestBtn = document.getElementById('restart-spelling-test');


// --- State Variables ---
let currentMode = 'flashcard';
let flashcardIndex = 0;
let isCardFlipped = false;
let shuffledFlashcards = [];

let mcqWords = [];
let mcqIndex = 0;
let mcqScore = 0;
let currentMcqAnswer = '';

let shuffledSpellingTeach = [];
let spellingTeachIndex = 0;
let isSpellingTeachCardFlipped = false;
let spellingTeachScore = 0; // Score for spelling teach

let spellingTestWords = [];
let spellingTestIndex = 0;
let spellingTestScore = 0;
let currentSpellingTestWord = '';

let currentSpellingSubMode = 'teach';


// --- Core Functions ---

// Function to show a specific mode
function showMode(mode) {
    console.log(`Switching to mode: ${mode}`);

    if (currentMode && modeElements[currentMode]) {
        modeElements[currentMode].classList.remove('active');
    } else if (currentMode) {
        console.error(`Could not find element for current mode: ${currentMode}`);
    }

    currentMode = mode;
    if (modeElements[currentMode]) {
       modeElements[currentMode].classList.add('active');
    } else {
        console.error("Mode element not found for:", mode);
        return;
    }

    if (currentMode === 'flashcard') {
        initializeFlashcards();
    } else if (currentMode === 'mcq') {
        initializeMcq();
    } else if (currentMode === 'spelling') {
        initializeSpelling();
    }
}

// --- Flashcard Mode Logic ---
function initializeFlashcards() {
    console.log("Initializing Flashcard mode");
    shuffledFlashcards = shuffleArray([...vocabulary]);
    flashcardIndex = 0;
    isCardFlipped = false;
    updateFlashcardDisplay();
}

function updateFlashcardDisplay() {
    const currentWord = shuffledFlashcards[flashcardIndex];
    if (currentWord) {
        flashcardWordEl.textContent = currentWord.word;
        flashcardMeaningEl.textContent = currentWord.meaning;
        cardCounterEl.textContent = `${flashcardIndex + 1} / ${shuffledFlashcards.length}`;
    } else {
        console.error("Flashcard index out of bounds:", flashcardIndex);
        flashcardWordEl.textContent = "Error";
        flashcardMeaningEl.textContent = "Could not load word.";
        cardCounterEl.textContent = `0 / ${shuffledFlashcards.length}`;
    }

    if (isCardFlipped) {
        flashcardEl.classList.add('flipped');
    } else {
        flashcardEl.classList.remove('flipped');
    }
}

function flipCard() {
    isCardFlipped = !isCardFlipped;
    flashcardEl.classList.toggle('flipped', isCardFlipped);
}

function changeFlashcard(direction) {
    isCardFlipped = false;
    if (direction === 'next') {
        flashcardIndex = (flashcardIndex + 1) % shuffledFlashcards.length;
    } else if (direction === 'prev') {
        flashcardIndex = (flashcardIndex - 1 + shuffledFlashcards.length) % shuffledFlashcards.length;
    }
    flashcardEl.classList.remove('flipped');
     setTimeout(updateFlashcardDisplay, 50);
}


// --- MCQ Mode Logic ---
function initializeMcq() {
    console.log("Initializing MCQ mode");
    mcqWords = shuffleArray([...vocabulary]);
    mcqIndex = 0;
    mcqScore = 0;
    mcqScoreEl.textContent = `Score: ${mcqScore} / ${mcqWords.length}`;
    nextMcqBtn.classList.add('hidden');
    restartMcqBtn.classList.add('hidden');
    mcqFeedbackEl.textContent = '';
    mcqFeedbackEl.className = 'feedback';
    submitAnswerBtn.classList.remove('hidden');

    if (mcqWords.length > 0) {
        loadMcqQuestion(mcqIndex);
    } else {
        mcqWordEl.textContent = "No words available for MCQ.";
        mcqOptionsEl.innerHTML = "";
        submitAnswerBtn.classList.add('hidden');
    }
}

function loadMcqQuestion(index) {
    console.log(`Loading MCQ question ${index}`);
    submitAnswerBtn.classList.remove('hidden');
    nextMcqBtn.classList.add('hidden');
    mcqFeedbackEl.textContent = '';
    mcqFeedbackEl.className = 'feedback';

    if (index >= mcqWords.length) {
        displayMcqResult();
        return;
    }

    const currentWordObj = mcqWords[index];
    mcqWordEl.textContent = currentWordObj.word;

    const correctMeaning = currentWordObj.meaning;
    currentMcqAnswer = correctMeaning;

    const otherMeanings = vocabulary.map(item => item.meaning).filter(meaning => meaning !== correctMeaning);
    const numDistractors = Math.min(3, otherMeanings.length);
    const distractors = getRandomItems(otherMeanings, numDistractors);

    const options = shuffleArray([...distractors, correctMeaning]);

    mcqOptionsEl.innerHTML = '';
    options.forEach(option => {
        const button = document.createElement('button');
        button.classList.add('mcq-option');
        button.textContent = option;
        button.onclick = () => selectMcqOption(button);
        mcqOptionsEl.appendChild(button);
    });

    submitAnswerBtn.disabled = false;
     mcqOptionsEl.querySelectorAll('.mcq-option').forEach(btn => {
         btn.classList.remove('selected', 'correct', 'incorrect');
     });
}

function selectMcqOption(selectedButton) {
    mcqOptionsEl.querySelectorAll('.mcq-option').forEach(btn => {
        btn.classList.remove('selected');
    });
    selectedButton.classList.add('selected');
}


function checkMcqAnswer() {
    const selectedOption = mcqOptionsEl.querySelector('.mcq-option.selected');
    if (!selectedOption) {
        mcqFeedbackEl.textContent = "Please select an option.";
         mcqFeedbackEl.className = 'feedback';
        return;
    }

    const userAnswer = selectedOption.textContent;

    mcqOptionsEl.querySelectorAll('.mcq-option').forEach(btn => {
       btn.disabled = true;
    });
    submitAnswerBtn.classList.add('hidden');


    if (userAnswer === currentMcqAnswer) {
        mcqFeedbackEl.textContent = "Correct!";
        mcqFeedbackEl.className = 'feedback correct';
        selectedOption.classList.add('correct');
        mcqScore++;
    } else {
        mcqFeedbackEl.textContent = `Incorrect. The correct meaning was: ${currentMcqAnswer}`;
         mcqFeedbackEl.className = 'feedback incorrect';
         selectedOption.classList.add('incorrect');
         mcqOptionsEl.querySelectorAll('.mcq-option').forEach(btn => {
             if(btn.textContent === currentMcqAnswer) {
                 btn.classList.add('correct');
             }
         });
    }

    mcqScoreEl.textContent = `Score: ${mcqScore} / ${mcqWords.length}`;
    nextMcqBtn.classList.remove('hidden');
}

function nextMcqQuestion() {
    mcqIndex++;
    loadMcqQuestion(mcqIndex);
}

function displayMcqResult() {
    mcqWordEl.textContent = "Quiz Finished!";
    mcqOptionsEl.innerHTML = "";
    submitAnswerBtn.classList.add('hidden');
    nextMcqBtn.classList.add('hidden');
    mcqFeedbackEl.textContent = `Your final score is ${mcqScore} out of ${mcqWords.length}.`;
    mcqFeedbackEl.className = 'feedback';
    restartMcqBtn.classList.remove('hidden');
}


// --- Spelling Mode Logic ---
function initializeSpelling() {
    console.log("Initializing Spelling mode");
     spellingTeachIndex = 0;
     spellingTestIndex = 0;
     spellingTestScore = 0;
     // Spelling Teach Score initialized when sub-mode is shown

    spellingTestWords = shuffleArray([...vocabulary]);

     showSpellingSubMode('teach'); // Defaults to teach mode
}

function showSpellingSubMode(subMode) {
    console.log(`Switching to spelling sub-mode: ${subMode}`);

     if (currentSpellingSubMode && spellingSubModes[currentSpellingSubMode]) {
         spellingSubModes[currentSpellingSubMode].classList.remove('active');
     } else if (currentSpellingSubMode) {
          console.error(`Could not find element for current spelling sub-mode: ${currentSpellingSubMode}`);
     }

     currentSpellingSubMode = subMode;
     if (spellingSubModes[currentSpellingSubMode]) {
        spellingSubModes[currentSpellingSubMode].classList.add('active');
     } else {
         console.error("Spelling sub-mode element not found for:", subMode);
         return;
     }

     if (currentSpellingSubMode === 'teach') {
         shuffledSpellingTeach = shuffleArray([...vocabulary]);
         spellingTeachIndex = 0;
         spellingTeachScore = 0; // Initialize score for Teach mode
         isSpellingTeachCardFlipped = false;
         updateSpellingTeachDisplay(); // This will update the counter and score display
          prevSpellingTeachBtn.classList.remove('hidden');
          nextSpellingTeachBtn.classList.remove('hidden');
     } else if (currentSpellingSubMode === 'test') {
         initializeSpellingTest();
          prevSpellingTestBtn.classList.add('hidden');
          nextSpellingTestBtn.classList.add('hidden');
     }
}

// Spelling Teach Logic
function updateSpellingTeachDisplay() {
    console.log(`Updating Spelling Teach display for index ${spellingTeachIndex}`);
    const currentWord = shuffledSpellingTeach[spellingTeachIndex];
     if (currentWord) {
        spellingTeachWordFrontEl.textContent = currentWord.word;
        spellingTeachMeaningFrontEl.textContent = currentWord.meaning;

        spellingTeachInputEl.value = '';
        spellingTeachFeedbackEl.textContent = '';
        spellingTeachFeedbackEl.className = 'feedback';

        spellingTeachCounterEl.textContent = `${spellingTeachIndex + 1} / ${shuffledSpellingTeach.length}`;
        spellingTeachScoreEl.textContent = `Score: ${spellingTeachScore} Correct`; // Update score display

        isSpellingTeachCardFlipped = false;
        spellingTeachCardEl.classList.remove('flipped');
        checkSpellingTeachBtn.classList.add('hidden-button');

     } else {
         console.error("Spelling Teach index out of bounds:", spellingTeachIndex);
         spellingTeachWordFrontEl.textContent = "Error";
         spellingTeachMeaningFrontEl.textContent = "Could not load word.";
         spellingTeachCounterEl.textContent = `0 / ${shuffledSpellingTeach.length}`;
          spellingTeachInputEl.value = '';
          spellingTeachFeedbackEl.textContent = 'Error loading word.';
          spellingTeachFeedbackEl.className = 'feedback incorrect';
          spellingTeachCardEl.classList.remove('flipped');
          checkSpellingTeachBtn.classList.add('hidden-button');
     }
}

function flipSpellingTeachCard() {
     console.log("Flipping spelling teach card");
     // Only allow flipping if a word is loaded and we are in teach mode
     if (!shuffledSpellingTeach[spellingTeachIndex] || currentSpellingSubMode !== 'teach') {
         console.warn("Cannot flip: No word loaded or not in teach mode.");
         return;
     }

    isSpellingTeachCardFlipped = !isSpellingTeachCardFlipped;
    spellingTeachCardEl.classList.toggle('flipped', isSpellingTeachCardFlipped);

    if (isSpellingTeachCardFlipped) {
         checkSpellingTeachBtn.classList.remove('hidden-button');
         setTimeout(() => spellingTeachInputEl.focus(), 300);
    } else {
         checkSpellingTeachBtn.classList.add('hidden-button');
         // Clear feedback and input when flipping back to the front
         spellingTeachFeedbackEl.textContent = '';
         spellingTeachFeedbackEl.className = 'feedback';
         spellingTeachInputEl.value = '';
    }
}


function checkSpellingTeach() {
    console.log("Checking spelling teach");
     // Only check if the card is flipped to the back and input is enabled
     if (!isSpellingTeachCardFlipped || spellingTeachInputEl.disabled) {
         console.warn("Cannot check: Card not flipped or input disabled.");
         return;
     }

    const userAnswer = spellingTeachInputEl.value.trim().toLowerCase();
    const correctWord = shuffledSpellingTeach[spellingTeachIndex].word.toLowerCase();

     // Disable input and button after checking to prevent multiple checks
     spellingTeachInputEl.disabled = true;
     checkSpellingTeachBtn.disabled = true;


    if (userAnswer === correctWord) {
        spellingTeachFeedbackEl.textContent = "Correct! Well done.";
        spellingTeachFeedbackEl.className = 'feedback correct';
         spellingTeachScore++; // Increment score on correct answer
    } else {
        spellingTeachFeedbackEl.textContent = `Incorrect. The word is "${shuffledSpellingTeach[spellingTeachIndex].word}".`;
        spellingTeachFeedbackEl.className = 'feedback incorrect';
    }
    spellingTeachScoreEl.textContent = `Score: ${spellingTeachScore} Correct`; // Update score display
     // Keep the card flipped to show feedback
}

function changeSpellingTeach(direction) {
    if (direction === 'next') {
        spellingTeachIndex = (spellingTeachIndex + 1) % shuffledSpellingTeach.length;
    } else if (direction === 'prev') {
        spellingTeachIndex = (spellingTeachIndex - 1 + shuffledSpellingTeach.length) % shuffledSpellingTeach.length;
    }
    isSpellingTeachCardFlipped = false;
     spellingTeachCardEl.classList.remove('flipped');
    // Allow check button and input to be used again for the new word
     spellingTeachInputEl.disabled = false;
     checkSpellingTeachBtn.disabled = false;
    setTimeout(updateSpellingTeachDisplay, 50);
}


// Spelling Test Logic
function initializeSpellingTest() {
    console.log("Initializing Spelling Test");
    spellingTestIndex = 0;
    spellingTestScore = 0;
     spellingTestWords = shuffleArray([...vocabulary]);
    spellingTestScoreEl.textContent = `Score: ${spellingTestScore} / ${spellingTestWords.length}`;
    spellingTestFeedbackEl.textContent = '';
    spellingTestFeedbackEl.className = 'feedback';
    restartSpellingTestBtn.classList.add('hidden');
    spellingTestInputEl.disabled = false;
    checkSpellingTestBtn.disabled = false;
     spellingTestInputEl.classList.remove('hidden');
    checkSpellingTestBtn.classList.remove('hidden');
     prevSpellingTestBtn.classList.add('hidden');
     nextSpellingTestBtn.classList.add('hidden');


    if (spellingTestWords.length > 0) {
        loadSpellingTestWord(spellingTestIndex);
    } else {
        spellingTestMeaningEl.textContent = "No words available for spelling test.";
        spellingTestInputEl.classList.add('hidden');
        checkSpellingTestBtn.classList.add('hidden');
    }
}

let loadSpellingTestWord = function(index) {
    console.log(`Loading Spelling Test word ${index}`);
    if (index < 0 || index >= spellingTestWords.length) {
        if (index >= spellingTestWords.length) {
             displaySpellingTestResult();
        }
        return;
    }

    spellingTestIndex = index;
    const currentWordObj = spellingTestWords[spellingTestIndex];
    currentSpellingTestWord = currentWordObj.word.toLowerCase();
    spellingTestMeaningEl.textContent = currentWordObj.meaning;
    spellingTestCounterEl.textContent = `${spellingTestIndex + 1} / ${spellingTestWords.length}`;

    if (spellingTestIndex < spellingTestWords.length && spellingTestInputEl.classList.contains('hidden') === false) {
         spellingTestInputEl.value = '';
         spellingTestInputEl.disabled = false;
         checkSpellingTestBtn.disabled = false;
         spellingTestFeedbackEl.textContent = '';
         spellingTestFeedbackEl.className = 'feedback';
         prevSpellingTestBtn.classList.add('hidden');
         nextSpellingTestBtn.classList.add('hidden');
         spellingTestInputEl.focus();
    } else {
        spellingTestInputEl.value = currentWordObj.word;
        spellingTestInputEl.disabled = true;
        checkSpellingTestBtn.classList.add('hidden');
         spellingTestFeedbackEl.textContent = `Word: "${currentWordObj.word}"`;
         spellingTestFeedbackEl.className = 'feedback';
         prevSpellingTestBtn.classList.remove('hidden');
         nextSpellingTestBtn.classList.remove('hidden');
    }
}


function checkSpellingTest() {
    console.log("Checking spelling test");
    const userAnswer = spellingTestInputEl.value.trim().toLowerCase();

    spellingTestInputEl.disabled = true;
    checkSpellingTestBtn.disabled = true;

    if (userAnswer === currentSpellingTestWord) {
        spellingTestFeedbackEl.textContent = "Correct!";
        spellingTestFeedbackEl.className = 'feedback correct';
        spellingTestScore++;
    } else {
        spellingTestFeedbackEl.textContent = `Incorrect. The word was "${spellingTestWords[spellingTestIndex].word}".`;
        spellingTestFeedbackEl.className = 'feedback incorrect';
    }
    spellingTestScoreEl.textContent = `Score: ${spellingTestScore} / ${spellingTestWords.length}`;

     setTimeout(() => {
         spellingTestIndex++;
         loadSpellingTestWord(spellingTestIndex);
     }, 1500);
}

function displaySpellingTestResult() {
    console.log("Spelling Test Finished");
    spellingTestMeaningEl.textContent = "Test Finished!";
    spellingTestInputEl.classList.add('hidden');
    checkSpellingTestBtn.classList.add('hidden');
     spellingTestCounterEl.textContent = '';
    spellingTestScoreEl.textContent = `Final Score: ${spellingTestScore} out of ${spellingTestWords.length}.`;
    spellingTestFeedbackEl.textContent = `Your final score is ${spellingTestScore} out of ${spellingTestWords.length}.`;
    spellingTestFeedbackEl.className = 'feedback';
    restartSpellingTestBtn.classList.remove('hidden');
     prevSpellingTestBtn.classList.remove('hidden');
     nextSpellingTestBtn.classList.remove('hidden');

     loadSpellingTestWord = function(index) {
        if (index < 0 || index >= spellingTestWords.length) return;

         spellingTestIndex = index;
        const currentWordObj = spellingTestWords[spellingTestIndex];
        spellingTestMeaningEl.textContent = currentWordObj.meaning;
        spellingTestInputEl.classList.remove('hidden');
        checkSpellingTestBtn.classList.add('hidden');
        spellingTestInputEl.value = currentWordObj.word;
        spellingTestInputEl.disabled = true;
        spellingTestCounterEl.textContent = `${spellingTestIndex + 1} / ${spellingTestWords.length}`;
        spellingTestFeedbackEl.textContent = `Word: "${currentWordObj.word}"`;
         spellingTestFeedbackEl.className = 'feedback';
    }
    loadSpellingTestWord(0);
}


// --- Event Listeners ---

document.addEventListener('DOMContentLoaded', () => {
    // Navigation buttons
    if (navButtons.flashcards) navButtons.flashcards.addEventListener('click', () => showMode('flashcard'));
    if (navButtons.mcq) navButtons.mcq.addEventListener('click', () => showMode('mcq'));
    if (navButtons.spelling) navButtons.spelling.addEventListener('click', () => showMode('spelling'));

    // Flashcard events
    if (flashcardEl) flashcardEl.addEventListener('click', flipCard);
    if (flipCardBtn) flipCardBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        flipCard();
    });
    if (prevCardBtn) prevCardBtn.addEventListener('click', () => changeFlashcard('prev'));
    if (nextCardBtn) nextCardBtn.addEventListener('click', () => changeFlashcard('next'));


    // MCQ events
    if (submitAnswerBtn) submitAnswerBtn.addEventListener('click', checkMcqAnswer);
    if (nextMcqBtn) nextMcqBtn.addEventListener('click', nextMcqQuestion);
    if (restartMcqBtn) restartMcqBtn.addEventListener('click', initializeMcq);


    // Spelling sub-navigation events
    if (spellingSubNavButtons.teach) spellingSubNavButtons.teach.addEventListener('click', () => showSpellingSubMode('teach'));
    if (spellingSubNavButtons.test) spellingSubNavButtons.test.addEventListener('click', () => showSpellingSubMode('test'));

    // Spelling Teach events
    // Click the card itself to flip (prevent propagation from inner elements)
    if (spellingTeachCardEl) spellingTeachCardEl.addEventListener('click', flipSpellingTeachCard);

    // STOP PROPAGATION for elements on the back face that shouldn't trigger flip
    if (spellingTeachInputEl) {
         spellingTeachInputEl.addEventListener('click', (e) => e.stopPropagation()); // Stop click on input
         spellingTeachInputEl.addEventListener('focus', (e) => e.stopPropagation()); // Stop focus from potentially bubbling
         // Keypress already handled, no stopPropagation needed there
    }
     if (checkSpellingTeachBtn) checkSpellingTeachBtn.addEventListener('click', (e) => {
         e.stopPropagation(); // Stop click on button
         checkSpellingTeach(); // Then perform the check
     });
     if (spellingTeachFeedbackEl) spellingTeachFeedbackEl.addEventListener('click', (e) => e.stopPropagation()); // Stop click on feedback area


    // Click the explicit flip button (already stops propagation)
    if (flipSpellingTeachCardBtn) flipSpellingTeachCardBtn.addEventListener('click', (e) => {
         e.stopPropagation();
         flipSpellingTeachCard();
    });

    // Keypress on input to check spelling (listener already exists)
    // prev/next buttons (listeners already exist)
    if (spellingTeachInputEl) spellingTeachInputEl.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
             if(isSpellingTeachCardFlipped && !spellingTeachInputEl.disabled) { // Also check input is enabled
                 checkSpellingTeach();
             }
        }
    });

    if (prevSpellingTeachBtn) prevSpellingTeachBtn.addEventListener('click', () => changeSpellingTeach('prev'));
    if (nextSpellingTeachBtn) nextSpellingTeachBtn.addEventListener('click', () => changeSpellingTeach('next'));


    // Spelling Test events
     if (checkSpellingTestBtn) checkSpellingTestBtn.addEventListener('click', checkSpellingTest);
    if (spellingTestInputEl) spellingTestInputEl.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
             event.preventDefault();
            checkSpellingTest();
        }
    });
    if (prevSpellingTestBtn) prevSpellingTestBtn.addEventListener('click', () => {
        if (restartSpellingTestBtn && !restartSpellingTestBtn.classList.contains('hidden')) {
             loadSpellingTestWord(spellingTestIndex - 1);
        }
    });
    if (nextSpellingTestBtn) nextSpellingTestBtn.addEventListener('click', () => {
        if (restartSpellingTestBtn && !restartSpellingTestBtn.classList.contains('hidden')) {
             loadSpellingTestWord(spellingTestIndex + 1);
        }
    });
     if (restartSpellingTestBtn) restartSpellingTestBtn.addEventListener('click', initializeSpellingTest);


    // --- Initialization ---
    showMode('flashcard');
});