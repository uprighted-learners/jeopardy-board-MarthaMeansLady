// Do not change this code


const placeholderQuestions = [    
    
    
    
    { 
        skill: "Easy", 
        category: "Trailblazing Actors",
        question: "Who was the first African American actor to win an Academy Award for Best Actor?",
        answer: "Sidney Poitier"
    },
    
    { 
        skill: "Easy", 
        category: "Classic Films",
        question: "What film marked the screen debut of Sidney Poitier, addressing racial issues in a school setting?",
        answer: "'Blackboard Jungle'"
    },
    
    { 
        skill: "Easy", 
        category: "Iconic Actresses",
        question: "Who was the first African American actress to be nominated for an Academy Award?",
        answer: "Dorothy Dandridge"
    },
    
    { 
        skill: "Easy", 
        category: "Black Hollywood Pioneers",
        question: "Who was the first African American to win an Academy Award for Best Supporting Actress?",
        answer: "Hattie McDaniel for her role in 'Gone with the Wind'"
    },
    
    { 
        skill: "Medium", 
        category: "Old Black Hollywood Studios",
        question: "What was the name of the independent film studio founded by Oscar Micheaux, producing films targeting African American audiences?",
        answer: "Micheaux Film Corporation"
    },
    
    { 
        skill: "Medium", 
        category: "Groundbreaking Directors",
        question: "Who was the first African American to direct a mainstream Hollywood film?",
        answer: "Gordon Parks for 'The Learning Tree'"
    },
    
    { 
        skill: "Medium", 
        category: "Trailblazing Entertainers",
        question: "Who was the first African American to win an Emmy Award for Outstanding Lead Actress in a Drama Series?",
        answer: "Cicely Tyson for her role in 'The Autobiography of Miss Jane Pittman'"
    },
    
    { 
        skill: "Medium", 
        category: "African American Cinema Icons",
        question: "Which actor, known for his roles in films like 'Lilies of the Field' and 'Guess Who's Coming to Dinner,' also directed the movie 'Hunger'?",
        answer: "Sidney Poitier"
    },
    
    { 
        skill: "Difficult", 
        category: "Black Hollywood Awards",
        question: "Who became the first African American to receive a Best Director nomination at the Academy Awards for his work on 'Boyz n the Hood'?",
        answer: "John Singleton"
    },
    
    { 
        skill: "Difficult", 
        category: "Old Black Hollywood Legends",
        question: "Who was an influential singer and actress known as the 'Empress of the Blues' and starred in the film 'St. Louis Blues'?",
        answer: "Bessie Smith"
    },
    
    { 
        skill: "Difficult", 
        category: "African American Oscar Winners",
        question: "Who became the first African American to win an Academy Award for Best Original Song?",
        answer: "Isaac Hayes for 'Theme from Shaft' from the movie 'Shaft'"
    },
    
    { 
        skill: "Difficult", 
        category: "Impactful Black Hollywood Figures",
        question: "Who was a pioneering African American actress and singer, winning a Tony Award for her role in 'Hello, Dolly!' and an Emmy for her TV show 'The Pearl Bailey Show'?",
        answer: "Pearl Bailey"
    },
    
    
    { 
        skill: "Easy", 
        category: "Trailblazing Filmmakers",
        question: "Who directed the groundbreaking film 'Black Panther,' which became a cultural phenomenon?",
        answer: "Ryan Coogler"
    },
    
    { 
        skill: "Easy", 
        category: "Iconic Films",
        question: "Which movie, starring Chadwick Boseman, highlights the life of a famous African American musician and was released posthumously?",
        answer: "'Ma Rainey's Black Bottom'"
    },
    
    { 
        skill: "Easy", 
        category: "Rising Stars",
        question: "Who starred as the lead in the film 'The Hate U Give,' based on the novel by Angie Thomas?",
        answer: "Amandla Stenberg"
    },
    
    { 
        skill: "Easy", 
        category: "Impactful Directors",
        question: "Who directed the film 'Selma,' focusing on the Civil Rights Movement and the march from Selma to Montgomery?",
        answer: "Ava DuVernay"
    },
    
    { 
        skill: "Medium", 
        category: "New Black Hollywood Stars",
        question: "Who portrayed Harriet Tubman in the biographical film 'Harriet'?",
        answer: "Cynthia Erivo"
    },
    
    { 
        skill: "Medium", 
        category: "Notable Achievements",
        question: "Which film won the Academy Award for Best Picture in 2017, directed by Barry Jenkins?",
        answer: "'Moonlight'"
    },
    
    { 
        skill: "Medium", 
        category: "Inspirational Filmmakers",
        question: "Who directed the film 'Fruitvale Station,' a dramatization of the events leading to the death of Oscar Grant?",
        answer: "Ryan Coogler"
    },
    
    { 
        skill: "Medium", 
        category: "Rising Talents",
        question: "Who starred in the film 'Get Out,' directed by Jordan Peele, which explores racism through a unique horror lens?",
        answer: "Daniel Kaluuya"
    },
    
    { 
        skill: "Difficult", 
        category: "Groundbreaking Projects",
        question: "Who directed the film 'When They See Us,' a miniseries depicting the Central Park Five case?",
        answer: "Ava DuVernay"
    },
    
    { 
        skill: "Difficult", 
        category: "New Black Hollywood Innovators",
        question: "Who became the first Black woman to win an Academy Award for Best Adapted Screenplay for her work on 'One Night in Miami'?",
        answer: "Kemp Powers"
    },
    
    {
        skill: "Difficult", 
        category: "African American Filmmakers",
        question: "Who directed the film 'The Hate U Give,' based on the novel by Angie Thomas?",
        answer: "Amandla Stenberg"
    }

    
    { 
        skill: "Difficult", 
        category: "Acclaimed Performers",
        question: "Who played the lead role in the film 'Judas and the Black Messiah,' portraying Black Panther Party leader Fred Hampton?",
        answer: "Daniel Kaluuya"
    },
    
    { 
        skill: "Difficult", 
        category: "Award-Winning Projects",
        question: "Which movie, directed by Steve McQueen, received critical acclaim and won the Academy Award for Best Picture in 2013?",
        answer: "'12 Years a Slave'"
    },

    { 
        skill: "Easy", 
        category: "Indie Film Festivals",
        question: "What is the name of the renowned film festival held annually in Park City, Utah, showcasing independent films?",
        answer: "Sundance Film Festival"
    },  
    
    { 
        skill: "Easy", 
        category: "Indie Cult Classics",
        question: "Which indie film features a character named Travis Bickle who becomes a vigilante in New York City?",
        answer: "Taxi Driver"
    },

        
    { 
        skill: "Easy", 
        category: "Disney Classics",
        question: "What is the name of the Disney animated movie featuring a glass slipper and a fairy godmother?",
        answer: "'Cinderella'"
    },
    
    { 
        skill: "Easy", 
        category: "Disney Mascots",
        question: "Who is Mickey Mouse's girlfriend?",
        answer: "Minnie Mouse"
    },
    
    { 
        skill: "Easy", 
        category: "Disney Princesses",
        question: "In which Disney film does a mermaid named Ariel dream of living on land?",
        answer: "'The Little Mermaid'"
    },
    
    { 
        skill: "Easy", 
        category: "Disney Villains",
        question: "Who is the villain in 'The Lion King' that kills Mufasa?",
        answer: "Scar"
    },
    
    { 
        skill: "Medium", 
        category: "Disney Theme Parks",
        question: "Which Disney theme park opened first: Disneyland in California or Disney World in Florida?",
        answer: "Disneyland in California (opened in 1955)"
    },
    
    { 
        skill: "Medium", 
        category: "Disney Pixar Films",
        question: "What movie features a clownfish named Marlin searching for his son Nemo?",
        answer: "'Finding Nemo'"
    },
    
    { 
        skill: "Medium", 
        category: "Disney Acquisitions",
        question: "What company did Disney acquire in 2006, bringing franchises like Marvel and Star Wars under its umbrella?",
        answer: "Pixar Animation Studios"
    },
    
    { 
        skill: "Medium", 
        category: "Disney Soundtracks",
        question: "Which Disney movie features the song 'Let It Go' performed by Idina Menzel?",
        answer: "'Frozen'"
    },
    
    { 
        skill: "Easy", 
        category: "Marilyn Monroe Films",
        question: "What was Marilyn Monroe's character name in the film 'Some Like It Hot'?",
        answer: "Sugar Kane Kowalczyk"
    },
    
    { 
        skill: "Easy", 
        category: "Marilyn Monroe Iconic Pose",
        question: "In which film does Marilyn Monroe's white dress get blown up by a subway grate?",
        answer: "'The Seven Year Itch'"
    },
    
    { 
        skill: "Easy", 
        category: "Marilyn Monroe Birth Name",
        question: "What was Marilyn Monroe's birth name?",
        answer: "Norma Jeane Mortenson (later baptized as Norma Jeane Baker)"
    },
    
    { 
        skill: "Easy", 
        category: "Marilyn Monroe Trivia",
        question: "In which year did Marilyn Monroe pass away?",
        answer: "1962"
    },

    { 
    skill: "Easy", 
    question: "Who was the first Black actor to win an Academy Award for Best Actor?",
    answer: "Sidney Poitier"
},

{ 
    skill: "Easy", 
    question: "Which film was based on the life of legendary singer Billie Holiday?",
    answer: "'Lady Sings the Blues'"
},

{ 
    skill: "Easy", 
    question: "Who directed the critically acclaimed film 'Do the Right Thing'?",
    answer: "Spike Lee"
},

{ 
    skill: "Easy", 
    question: "What was the first feature-length film with an all-Black cast?",
    answer: "'The Homesteader' (1919)"
},

{ 
    skill: "Medium", 
    question: "Which movie stars Sidney Poitier as a schoolteacher dealing with racial prejudice in a small town?",
    answer: "'To Sir, with Love'"
},

{ 
    skill: "Medium", 
    question: "Who played the lead role in the film 'Hidden Figures'?",
    answer: "Taraji P. Henson"
},

{ 
    skill: "Medium", 
    question: "What documentary film explores the life and legacy of singer Nina Simone?",
    answer: "'What Happened, Miss Simone?'"
},

{ 
    skill: "Medium", 
    question: "Who directed the film '12 Years a Slave,' which won the Academy Award for Best Picture?",
    answer: "Steve McQueen"
},

{ 
    skill: "Difficult", 
    question: "Which filmmaker directed the 1991 film 'Daughters of the Dust,' considered a landmark in Black cinema?",
    answer: "Julie Dash"
},

{ 
    skill: "Difficult", 
    question: "What film, often cited as the first major blaxploitation movie, starred Pam Grier as the title character?",
    answer: "'Coffy'"
},

{ 
    skill: "Difficult", 
    question: "Who directed the film 'Moonlight,' which won the Academy Award for Best Picture in 2017?",
    answer: "Barry Jenkins"
},

{ 
    skill: "Difficult", 
    question: "What annual film festival in Utah celebrates Black independent cinema and storytelling?",
    answer: "Sundance Film Festival (For its focus on independent films including those by Black filmmakers)"
},


{ 
    skill: "Easy", 
    question: "Who was the first Black actor to win an Academy Award for Best Actor?",
    answer: "Sidney Poitier"
},

{ 
    skill: "Easy", 
    question: "Which film was based on the life of legendary singer Billie Holiday?",
    answer: "'Lady Sings the Blues'"
},

{ 
    skill: "Easy", 
    question: "Who directed the critically acclaimed film 'Do the Right Thing'?",
    answer: "Spike Lee"
},

{ 
    skill: "Easy", 
    question: "What was the first feature-length film with an all-Black cast?",
    answer: "'The Homesteader' (1919)"
},

{ 
    skill: "Medium", 
    question: "Which movie stars Sidney Poitier as a schoolteacher dealing with racial prejudice in a small town?",
    answer: "'To Sir, with Love'"
},

{ 
    skill: "Medium", 
    question: "Who played the lead role in the film 'Hidden Figures'?",
    answer: "Taraji P. Henson"
},

{ 
    skill: "Medium", 
    question: "What documentary film explores the life and legacy of singer Nina Simone?",
    answer: "What Happened, Miss Simone?"
},

{ 
    skill: "Medium", 
    question: "Who directed the film '12 Years a Slave,' which won the Academy Award for Best Picture?",
    answer: "Steve McQueen"
},

{ 
    skill: "Difficult", 
    question: "Which filmmaker directed the 1991 film 'Daughters of the Dust,' considered a landmark in Black cinema?",
    answer: "Julie Dash"
},

{ 
    skill: "Difficult", 
    question: "What film, often cited as the first major blaxploitation movie, starred Pam Grier as the title character?",
    answer: "'Coffy'"
},

{ 
    skill: "Difficult", 
    question: "Who directed the film 'Moonlight,' which won the Academy Award for Best Picture in 2017?",
    answer: "Barry Jenkins"
},

{ 
    skill: "Difficult", 
    question: "What annual film festival in Utah celebrates Black independent cinema and storytelling?",
    answer: "Sundance Film Festival (For its focus on independent films including those by Black filmmakers)"
},


{ 
    skill: "Easy", 
    category: "",
    question: "Who was known as 'America's Sweetheart' during the silent film era?",
    answer: "Mary Pickford"
},
{ 
    skill: "Easy", 
    category: "",
    question: "What movie marked the first on-screen appearance of Mickey Mouse?",
    answer: "'Steamboat Willie'"
},
{ 
    skill: "Easy", 
    category: "",
    question: "Who directed the iconic film 'Gone with the Wind'?",
    answer: "Victor Fleming"
},
{ 
    skill: "Easy", 
    category: "",
    question: "Which film won the Academy Award for Best Picture in 1942?",
    answer: "'Mrs. Miniver'"
},
{ 
    skill: "Medium", 
    category: "",
    question: "In which movie does the line 'Here's looking at you, kid' originate?",
    answer: "'Casablanca'"
},
{ 
    skill: "Medium", 
    category: "",
    question: "What scandalous event is associated with actor Fatty Arbuckle in the 1920s?",
    answer: "Arbuckle was accused of manslaughter in a widely publicized scandal involving the death of actress Virginia Rappe."
},
{ 
    skill: "Medium", 
    category: "",
    question: "Which studio was known as the 'Dream Factory' during the Golden Age of Hollywood?",
    answer: "MGM (Metro-Goldwyn-Mayer)"
},
{ 
    skill: "Medium", 
    category: "",
    question: "Who played the role of Scarlett O'Hara in 'Gone with the Wind'?",
    answer: "Vivien Leigh"
},
{ 
    skill: "Difficult", 
    category: "",
    question: "What groundbreaking film technique did Orson Welles pioneer in 'Citizen Kane'?",
    answer: "Welles pioneered the innovative use of deep focus cinematography."
},
{ 
    skill: "Difficult", 
    category: "",
    question: "During the Red Scare, which Hollywood screenwriter was blacklisted and later won two Oscars under a pseudonym?",
    answer: "Dalton Trumbo"
},
{ 
    skill: "Difficult", 
    category: "",
    question: "What term describes the genre of dark, cynical films prevalent in the post-war era of Hollywood?",
    answer: "Film Noir"
},
{ 
    skill: "Difficult", 
    category: "",
    question: "What landmark legal case effectively ended the studio system's control over Hollywood's production and distribution?",
    answer: "The Paramount Case (United States v. Paramount Pictures, Inc.)"
},

{ 
    skill: "Easy", 
    category: "Hollywood Legends",
    question: "Who was known as 'America's Sweetheart' during the silent film era?",
    answer: "Mary Pickford"
},
{ 
    skill: "Easy", 
    category: "Classic Films",
    question: "What movie marked the first on-screen appearance of Mickey Mouse?",
    answer: "'Steamboat Willie'"
},
{ 
    skill: "Easy", 
    category: "Famous Directors",
    question: "Who directed the iconic film 'Gone with the Wind'?",
    answer: "Victor Fleming"
},
{ 
    skill: "Easy", 
    category: "Oscars History",
    question: "Which film won the Academy Award for Best Picture in 1942?",
    answer: "'Mrs. Miniver'"
},
{ 
    skill: "Easy", 
    category: "Hollywood Era",
    question: "Which actress was famously known for her role as Dorothy in 'The Wizard of Oz'?",
    answer: "Judy Garland"
},
{ 
    skill: "Easy", 
    category: "Cinema Technology",
    question: "What was the first feature film to use Technicolor?",
    answer: "'Becky Sharp' (1935)"
},
{ 
    skill: "Medium", 
    category: "Movie Quotes",
    question: "In which movie does the line 'Frankly, my dear, I don't give a damn' appear?",
    answer: "'Gone with the Wind'"
},
{ 
    skill: "Medium", 
    category: "Hollywood Scandals",
    question: "What scandalous event is associated with actor Charlie Chaplin in the early 20th century?",
    answer: "Allegations of involvement with underage women and paternity suits."
},
{ 
    skill: "Medium", 
    category: "Studio Era",
    question: "What studio produced the film 'Casablanca'?",
    answer: "Warner Bros. Studios"
},
{ 
    skill: "Medium", 
    category: "Classic Actors",
    question: "Who played the role of Rhett Butler in 'Gone with the Wind'?",
    answer: "Clark Gable"
},
{ 
    skill: "Medium", 
    category: "Hollywood Glamour",
    question: "Which actress was famous for her roles in 'Breakfast at Tiffany's' and 'Roman Holiday'?",
    answer: "Audrey Hepburn"
},
{ 
    skill: "Medium", 
    category: "Behind the Scenes",
    question: "Which director is considered the master of suspense and directed films like 'Psycho' and 'Vertigo'?",
    answer: "Alfred Hitchcock"
},
{ 
    skill: "Difficult", 
    category: "Golden Age Innovations",
    question: "What technology did Alfred Hitchcock use to create the illusion of a continuous shot in 'Rope'?",
    answer: "Long, unbroken takes cleverly disguised through editing."
},
{ 
    skill: "Difficult", 
    category: "Hollywood Blacklist",
    question: "Which Hollywood screenwriter famously refused to testify before the House Un-American Activities Committee in 1947?",
    answer: "Dalton Trumbo"
},
{ 
    skill: "Difficult", 
    category: "Film Noir",
    question: "Who directed the classic film 'The Maltese Falcon' starring Humphrey Bogart?",
    answer: "John Huston"
},
{ 
    skill: "Difficult", 
    category: "Studio System Dissolution",
    question: "Which legal decision in 1948 broke up the major studios' control over movie distribution?",
    answer: "United States v. Paramount Pictures, Inc. (The Paramount Case)"
},

{ 
    skill: "Easy", 
    category: "Trailblazing Actors",
    question: "Who was the first Black actor to win an Academy Award for Best Actor?",
    answer: "Sidney Poitier"
},
{ 
    skill: "Easy", 
    category: "Iconic Movies",
    question: "Which film portrayed the life of legendary baseball player Jackie Robinson?",
    answer: "'42'"
},
{ 
    skill: "Easy", 
    category: "Pioneering Directors",
    question: "Who directed the film 'Black Panther'?",
    answer: "Ryan Coogler"
},
{ 
    skill: "Easy", 
    category: "Black Cinema History",
    question: "What was the first major Hollywood studio film to be directed by a Black director?",
    answer: "'Shaft' directed by Gordon Parks"
},
{ 
    skill: "Easy", 
    category: "Notable Actresses",
    question: "Who starred in the movie 'The Color Purple' directed by Steven Spielberg?",
    answer: "Whoopi Goldberg"
},
{ 
    skill: "Easy", 
    category: "African American Film Characters",
    question: "Who played the character of Lando Calrissian in 'Star Wars: Episode V - The Empire Strikes Back'?",
    answer: "Billy Dee Williams"
},
{ 
    skill: "Medium", 
    category: "Civil Rights Era Films",
    question: "Which movie stars Denzel Washington as Malcolm X in a biographical drama?",
    answer: "'Malcolm X'"
},
{ 
    skill: "Medium", 
    category: "Impactful Documentaries",
    question: "What documentary film explores the life and career of Michael Jordan?",
    answer: "'The Last Dance'"
},
{ 
    skill: "Medium", 
    category: "African American Filmmakers",
    question: "Who directed the movie 'Fruitvale Station,' based on a true story about a young man shot by transit police?",
    answer: "Ryan Coogler"
},
{ 
    skill: "Medium", 
    category: "Black Music Icons on Screen",
    question: "Who played the role of Tina Turner in the biographical film 'What's Love Got to Do with It'?",
    answer: "Angela Bassett"
},
{ 
    skill: "Medium", 
    category: "Contemporary Voices",
    question: "Who directed the film 'Get Out,' a critically acclaimed horror film with strong social commentary?",
    answer: "Jordan Peele"
},
{ 
    skill: "Medium", 
    category: "Black Excellence in Comedy",
    question: "Which comedian starred in the film 'Girls Trip' and has a successful talk show?",
    answer: "Tiffany Haddish"
},
{ 
    skill: "Difficult", 
    category: "Black Independent Cinema",
    question: "Which film directed by Barry Jenkins won the Academy Award for Best Picture in 2017?",
    answer: "'Moonlight'"
},
{ 
    skill: "Difficult", 
    category: "Blaxploitation Films",
    question: "Which movie, known for its soundtrack by Curtis Mayfield, featured Ron O'Neal as a drug dealer?",
    answer: "'Super Fly'"
},
{ 
    skill: "Difficult", 
    category: "Black Directors' Breakthrough Films",
    question: "Who directed the film 'Medicine for Melancholy,' marking his directorial debut?",
    answer: "Barry Jenkins"
},
{ 
    skill: "Difficult", 
    category: "Black Film Festivals",
    question: "Which film festival, dedicated to celebrating African American cinema, is held annually in Atlanta?",
    answer: "BronzeLens Film Festival"
},


{ 
    skill: "Easy", 
    category: "Classic Hollywood Couples",
    question: "Which iconic Hollywood couple starred in several films together, including 'Adam's Rib' and 'Bringing Up Baby'?",
    answer: "Spencer Tracy and Katharine Hepburn"
},
{ 
    skill: "Easy", 
    category: "Classic Comedies",
    question: "Who starred in the film 'Some Like It Hot,' a comedy set in the prohibition era?",
    answer: "Marilyn Monroe, Tony Curtis, and Jack Lemmon"
},
{ 
    skill: "Easy", 
    category: "Silent Film Stars",
    question: "What was the name of the silent film star known for his character 'The Little Tramp'?",
    answer: "Charlie Chaplin"
},
{ 
    skill: "Easy", 
    category: "Hollywood Musical",
    question: "Which musical film features the characters Danny and Sandy and their summer romance?",
    answer: "'Grease'"
},
{ 
    skill: "Medium", 
    category: "Classic Hollywood Directors",
    question: "Who directed the film 'The Philadelphia Story,' starring Katharine Hepburn, Cary Grant, and James Stewart?",
    answer: "George Cukor"
},
{ 
    skill: "Medium", 
    category: "Hollywood Icons",
    question: "Which actor was known as 'The King of Hollywood' and starred in movies like 'Captain Blood' and 'The Adventures of Robin Hood'?",
    answer: "Errol Flynn"
},
{ 
    skill: "Medium", 
    category: "Cinematic Innovations",
    question: "Which director is credited with the invention of the 'Dolly Zoom' shot technique in the film 'Vertigo'?",
    answer: "Alfred Hitchcock"
},
{ 
    skill: "Medium", 
    category: "Hollywood Studios",
    question: "What studio produced the film 'Citizen Kane'?",
    answer: "RKO Pictures"
},
{ 
    skill: "Difficult", 
    category: "Hollywood Artistry",
    question: "Which film won the first Academy Award for Best Animated Feature in 2002?",
    answer: "'Shrek'"
},
{ 
    skill: "Difficult", 
    category: "Hollywood Legends' First Roles",
    question: "In which film did Marlon Brando make his screen debut?",
    answer: "'The Men' (1950)"
},
{ 
    skill: "Difficult", 
    category: "Movie Score Maestros",
    question: "Who composed the iconic musical score for the film 'Jaws'?",
    answer: "John Williams"
},
{ 
    skill: "Difficult", 
    category: "Hollywood Trivia",
    question: "Which actor turned down the role of James Bond before it went to Sean Connery?",
    answer: "Cary Grant"
},


{ 
    skill: "Easy", 
    category: "Groundbreaking Roles",
    question: "Who was the first Black actress to win an Academy Award for Best Supporting Actress?",
    answer: "Hattie McDaniel"
},
{ 
    skill: "Easy", 
    category: "Iconic Black Directors",
    question: "Who directed the film 'Selma,' a historical drama centered around the Civil Rights Movement?",
    answer: "Ava DuVernay"
},
{ 
    skill: "Easy", 
    category: "Black Comedy Stars",
    question: "Who starred in the film 'Coming to America' as multiple characters, including Prince Akeem and Randy Watson?",
    answer: "Eddie Murphy"
},
{ 
    skill: "Easy", 
    category: "African American Film Festivals",
    question: "What is the name of the annual film festival held in Los Angeles, showcasing Black cinema?",
    answer: "Pan African Film Festival (PAFF)"
},
{ 
    skill: "Medium", 
    category: "African American Music Icons in Film",
    question: "Who portrayed Ray Charles in the biographical film 'Ray'?",
    answer: "Jamie Foxx"
},
{ 
    skill: "Medium", 
    category: "Black Directors' Achievements",
    question: "Who became the first Black woman to win the Academy Award for Best Director?",
    answer: "Chloé Zhao for 'Nomadland'"
},
{ 
    skill: "Medium", 
    category: "Impactful Films",
    question: "Which movie, directed by Spike Lee, dealt with the sensitive subject of racial tension in a Brooklyn neighborhood?",
    answer: "'Do the Right Thing'"
},
{ 
    skill: "Medium", 
    category: "Black Cinema Writers",
    question: "Who wrote and directed the film 'Barry,' a biographical drama about Barack Obama's college days?",
    answer: "Vikram Gandhi"
},
{ 
    skill: "Difficult", 
    category: "Independent Black Cinema",
    question: "Which film, directed by Charles Burnett, is often considered a seminal work of African American cinema and follows the life of a young African American man in Watts?",
    answer: "'Killer of Sheep'"
},
{ 
    skill: "Difficult", 
    category: "Black Actors' Breakthrough Roles",
    question: "In which film did Viola Davis receive critical acclaim for her performance as Aibileen Clark?",
    answer: "'The Help'"
},
{ 
    skill: "Difficult", 
    category: "Black Hollywood Producers",
    question: "Who produced the Academy Award-nominated film 'Fruitvale Station'?",
    answer: "Forest Whitaker"
},
{ 
    skill: "Difficult", 
    category: "Black Film and Literature",
    question: "Which film, based on a novel by Sapphire, explores the life of an abused and illiterate teenager in Harlem?",
    answer: "'Precious'"
},

];

  export default placeholderQuestions; 

  //Marilyn Monroe
// Indie Films
// Oscars
// Disney
// Black Hollywood
// Iconic Films 

 

