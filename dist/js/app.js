new Vue({
  el: "#vue-app",
  data: {
    currentFilter: "ALL",
    category: "",
    projectList: [
      {
        title: "Abated Mass of Flesh",
        link: "./abated-mass-of-flesh.html",
        img: "dist/img/deathmetal/abated-mass-of-flesh.jpg",
        category: "DEATH METAL"
      },
      {
        title: "Adventunnum",
        link: "./adventunnum.html",
        img: "dist/img/deathmetal/adventunnum1.webp",
        category: "DEATH METAL"
      },
      {
        title: "Ænon",
        link: "./aenon.html",
        img: "dist/img/metalcore/aenon-logo.webp",
        category: "METALCORE"
      },
      {
        title: "Afterimage",
        link: "./afterimage.html",
        img: "dist/img/deathmetal/afterimage-logo.webp",
        category: "DEATH METAL"
      },
      {
        title:'Aletheian',
        link:'./aletheian.html',
        img:'dist/img/deathmetal/aletheian.webp',
        category:'DEATH METAL'
      },
      {
        title: "Among Millenials",
        link: "./among-millenials.html",
        img: "dist/img/metalcore/among-millenials.webp",
        category: "METALCORE"
      },
      {
        title: "Amplified",
        link: "./amplified.html",
        img: "dist/img/deathmetal/amplified1.webp",
        category: "DEATH METAL"
      },
      {
        title: "Anima Mortuum",
        link: "./anima-mortuum.html",
        img: "dist/img/blackmetal/anima-mortuum1.webp",
        category: "BLACK METAL"
      },
      {
        title: "Angel's Fire",
        link: "./angels-fire.html",
        img: "dist/img/metal/angels-fire.webp",
        category: "METAL"
      },
      {
        title: "Antiviper",
        link: "./antiviper.html",
        img: "dist/img/deathmetal/antiviper.webp",
        category: "DEATH METAL"
      },
      {
        title: "Apollyon",
        link: "./apollyon.html",
        img: "dist/img/deathcore/apollyon.webp",
        category: "DEATHCORE"
      },
      {
        title: "Arthure",
        link: "./arthure.html",
        img: "dist/img/deathmetal/arthure.webp",
        category: "DEATH METAL"
      },
      {
        title: "Ascendant",
        link: "./ascendant.html",
        img: "dist/img/deathmetal/ascendant1.jpg",
        category: "DEATH METAL"
      },
      {
        title: "Âstillian",
        link: "./astillian.html",
        img: "dist/img/deathmetal/astillian-logo.webp",
        category: "DEATH METAL"
      },
      {
        title: "Atrocity",
        link: "./atrocity.html",
        img: "dist/img/deathcore/atrocity.webp",
        category: "DEATHCORE"
      },

      /*{
            title:'Ben Dixon',
            link:'./ben-dixon.html',
            img:'dist/img/metalcore/ben-dixon.webp',
            category:'METALCORE'
        },*/
      {
        title: "Battleship!",
        link: "./battleship.html",
        img: "dist/img/deathcore/battleship3.jpg",
        category: "DEATHCORE"
      },
      {
        title: "The Beckoning",
        link: "./the-beckoning.html",
        img: "dist/img/extreme-metal/thebeckoning-logo.jpg",
        category: "EXTREME METAL"
      },
      {
        title: "Be Not Betrayed",
        link: "./be-not-betrayed.html",
        img: "dist/img/blackmetal/be-not-betrayed.jpg",
        category: "EXTREME METAL"
      },
      {
        title: "Ben Baruk",
        link: "./ben-baruk.html",
        img: "dist/img/metal/ben-baruk-logo.webp",
        category: "METAL"
      },
      {
        title: "Bismoth",
        link: "./bismoth.html",
        img: "dist/img/blackmetal/bismothlogo.jpg",
        category: "BLACK METAL"
      },
      {
        title: "Blood Covenant",
        link: "./blood-covenant.html",
        img: "dist/img/blackmetal/blood-covenant.webp",
        category: "BLACK METAL"
      },
      {
        title: "Blood Thirsty",
        link: "./blood-thirsty.html",
        img: "dist/img/deathmetal/bloodthirsty.webp",
        category: "DEATH METAL"
      },
      {
        title: "Bloodlines",
        link: "./bloodlines.html",
        img: "dist/img/metalcore/bloodlines.webp",
        category: "METALCORE"
      },
      {
        title:'BLue Fire Horizon',
        link:'./blue-fire-horizon.html',
        img:'dist/img/metalcore/blue-fire-horizon2.webp',
        category: "METALCORE"
      },
      {
        title: "Bloodline Severed",
        link: "./bloodline-severed.html",
        img: "dist/img/deathcore/bloodline-severed.jpg",
        category: "DEATHCORE"
      },
      {
        title: "A Body Divided",
        link: "./a-body-divided.html",
        img: "dist/img/deathcore/a-body-divided2.jpg",
        category: "DEATHCORE"
      },
      {
        title: "Broken Flesh",
        link: "./broken-flesh.html",
        img: "dist/img/deathmetal/broken-flesh.webp",
        category: "DEATH METAL"
      },
      {
        title: "Brotality",
        link: "./brotality.html",
        img: "dist/img/metal/brotality1.jpg",
        category: "METAL"
      },
      {
        title: "Brutal Cross",
        link: "./brutal-cross.html",
        img: "dist/img/extreme-metal/brutal-cross.webp",
        category: "EXTREME METAL"
      },
      {
        title: "The Burial",
        link: "./the-burial.html",
        img: "dist/img/deathmetal/the-burial.webp",
        category: "DEATH METAL"
      },
      {
        title: "Christageddon",
        link: "./christageddon.html",
        img: "dist/img/blackmetal/christageddon1.webp",
        category: "BLACK METAL"
      },
      {
        title: "Collapse//Revive",
        link: "./collapse-revive.html",
        img: "dist/img/metalcore/collapse-revive.webp",
        category: "METALCORE"
      },
      {
        title: "Confide",
        link: "./confide.html",
        img: "dist/img/metalcore/confide.webp",
        category: "METALCORE"
      },
      {
        title: "Context",
        link: "./cntxt.html",
        img: "dist/img/metalcore/cntxtlogo.webp",
        category: "METALCORE"
      },
      {
        title: "Crowned in Sorrow",
        link: "./crowned-in-sorrow.html",
        img: "dist/img/deathmetal/crowned-in-sorrow.jpg",
        category: "DEATH METAL"
      },
      {
        title: "Cruentis",
        link: "./cruentis.html",
        img: "dist/img/deathmetal/cruentis.webp",
        category: "DEATH METAL"
      },
      {
        title: "Dawnbreaker",
        link: "./dawnbreaker.html",
        img: "dist/img/blackmetal/dawnbreaker1.webp",
        category: "BLACK METAL"
      },
      {
        title: "daygraves",
        link: "./daygraves.html",
        img: "dist/img/blackmetal/daygraves.webp",
        category: "BLACK METAL"
      },
      {
        title: "The Death In Me",
        link: "./the-death-in-me.html",
        img: "dist/img/hardcore/the-death-in-me-logo.webp",
        category: "HARDCORE"
      },
      {
        title: "Diamonds to Dust",
        link: "./diamonds-to-dust.html",
        img: "dist/img/deathcore/diamonds-to-dust.webp",
        category: "DEATHCORE"
      },
      {
        title: "Diatheke",
        link: "./diatheke.html",
        img: "dist/img/deathmetal/diatheke.webp",
        category: "DEATH METAL"
      },
      {
        title:'Dividing The Masses',
        link:'./dividing-the-masses.html',
        img:'dist/img/deathcore/dividing-the-masses1.webp',
        category:'DEATHCORE'
      },
      {
        title: "Elephant Watchtower",
        link: "./elephant-watchtower.html",
        img: "dist/img/deathmetal/elephant-watchtower.webp",
        category: "DEATH METAL"
      },
      {
        title: "Empty Grave",
        link: "./emptygrave.html",
        img: "dist/img/deathmetal/emptygrave.webp",
        category: "DEATH METAL"
      },
      {
        title: "Encryptor",
        link: "./encryptor.html",
        img: "dist/img/deathmetal/encryptor.webp",
        category: "DEATH METAL"
      },
      {
        title:'Endless Sacrifice',
        link:'./endless-sacrifice.html',
        img:'dist/img/deathmetal/endless-sacrifice.webp',
        category:'DEATH METAL'
      },
      {
        title: "Eonia",
        link: "./eonia.html",
        img: "dist/img/metalcore/eonia.webp",
        category: "METALCORE"
      },
      {
        title: "Eternal After Death",
        link: "./eternal-after-death.html",
        img: "dist/img/deathcore/eternal-after-death.webp",
        category: "DEATHCORE"
      },
      {
        title: "Eunagelion",
        link: "./eunagelion.html",
        img: "dist/img/blackmetal/eunagelion.webp",
        category: "BLACK METAL"
      },
      {
        title: "Every Knee Shall Bow",
        link: "./eksb.html",
        img: "dist/img/deathcore/eksb.webp",
        category: "DEATHCORE"
      },
      {
        title: "Eyes of the Defiled",
        link: "./eyes-of-the-defiled.html",
        img: "dist/img/deathcore/eyes-of-the-defiled.webp",
        category: "DEATHCORE"
      },
      {
        title: "Faithful and True",
        link: "./faithful-and-true.html",
        img: "dist/img/deathcore/faithful-and-true.webp",
        category: "DEATHCORE"
      },
      {
        title: "Feast Eternal",
        link: "./feast-eternal.html",
        img: "dist/img/deathmetal/feast-eternal.webp",
        category: "DEATH METAL"
      },
      {
        title: "A Feast For Kings",
        link: "./a-feast-for-kings.html",
        img: "dist/img/metalcore/a-feast-for-kings.webp",
        category: "METALCORE"
      },
      {
        title: "Fleshkiller",
        link: "./fleshkiller.html",
        img: "dist/img/deathmetal/fleshkiller1.jpg",
        category: "DEATH METAL"
      },
      {
        title: "The Flesh of Kings",
        link: "./the-flesh-of-kings.html",
        img: "dist/img/deathcore/the-flesh-of-kings.webp",
        category: "DEATHCORE"
      },
      {
        title: "Forfeit Thee Untrue",
        link: "./forfeit-thee-untrue.html",
        img: "dist/img/metal/ftu.webp",
        category: "METAL"
      },
      {
        title: "Frost Like Ashes",
        link: "./frost-like-ashes.html",
        img: "dist/img/blackmetal/frost-like-ashes.webp",
        category: "BLACK METAL"
      },
      {
        title: "Good News We're Dead",
        link: "./gnwd.html",
        img: "dist/img/metalcore/gnwd.webp",
        category: "METALCORE"
      },
      {
        title: "Grave Decay",
        link: "./grave-decay.html",
        img: "dist/img/deathmetal/grave-decay.webp",
        category: "DEATH METAL"
      },
      {
        title: "Grave Declaration",
        link: "./grave-declaration.html",
        img: "dist/img/blackmetal/grave-declaration.jpg",
        category: "BLACK METAL"
      },
      {
        title: "Hashem",
        link: "./hashem.html",
        img: "dist/img/deathmetal/hashemlogo.jpg",
        category: "DEATH METAL"
      },
      {
        title: "HARD LOOK",
        link: "./hard-look.html",
        img: "dist/img/metalcore/hardlook.webp",
        category: "METALCORE"
      },
      {
        title: "Hazeroth",
        link: "./hazeroth.html",
        img: "dist/img/blackmetal/hazeroth.webp",
        category: "BLACK METAL"
      },
      /*{
        title:'Hilastherion',
        link:'./hilastherion.html',
        img:'dist/img/deathmetal/hilastherion1.webp',
        category:'DEATH METAL'
      },*/
      {
        title: "His Kingdom Suffers",
        link: "./his-kingdom-suffers.html",
        img: "dist/img/deathcore/hks.webp",
        category: "DEATHCORE"
      },
      {
        title:'Hope Deferred',
        link:'./hope-deferred.html',
        img:'dist/img/deathmetal/hope-deferred2.webp',
        category:'DEATH METAL'
      },
      {
        title: "Hope For The Dying",
        link: "./hope-for-the-dying.html",
        img: "dist/img/deathmetal/hopeforthedyingLogo.webp",
        category: "DEATH METAL"
      },
      {
        title: "Impending Doom",
        link: "./impending-doom.html",
        img: "dist/img/deathcore/impending-doom.jpg",
        category: "DEATHCORE"
      },
      {
        title: "In-Conquered",
        link: "./in-conquered.html",
        img: "dist/img/deathmetal/in-conquered1.webp",
        category: "DEATH METAL"
      },
      {
        title: "In Grief",
        link: "./in-grief.html",
        img: "dist/img/deathmetal/in-grief.webp",
        category: "DEATH METAL"
      },
      {
        title: "In The Midst of Lions",
        link: "./in-the-midst-of-lions.html",
        img: "dist/img/deathcore/in-the-midst-of-lions2.webp",
        category: "DEATHCORE"
      },
      {
        title: "Inborn Tendency",
        link: "./inborn-tendency.html",
        img: "dist/img/deathmetal/inborn-tendency.webp",
        category: "DEATHCORE"
      },
      {
        title: "Incarnate Deity",
        link: "./incarnatedeity.html",
        img: "dist/img/deathmetal/incarnatedeity.webp",
        category: "DEATH METAL"
      },
      {
        title:"Incinerating The Infidels",
        link:'./incinerating-the-infidels.html',
        img:'dist/img/deathmetal/incinerating-the-infidels2.webp',
        category:'DEATH METAL'
      },
      {
        title:'Intercessor',
        link:'./intercessor.html',
        img:'dist/img/metalcore/intercessor1.webp',
        category:'METALCORE'
      },
      {
        title: "Irae",
        link: "./irae.html",
        img: "dist/img/metalcore/irae.webp",
        category: "METALCORE"
      },
      {
        title: "Irgalom",
        link: "./irgalom.html",
        img: "dist/img/extreme-metal/irgalom.webp",
        category: "EXTREME METAL"
      },
      {
        title: "Jesus Wannabeez",
        link: "./jesuswannabeez.html",
        img: "dist/img/metal/jw.webp",
        category: "METAL"
      },
      {
        title: "Jonava",
        link: "./jonava.html",
        img: "dist/img/blackmetal/jonava.webp",
        category: "BLACK METAL"
      },
      {
        title: "Krig",
        link: "./krig.html",
        img: "dist/img/deathmetal/krig1.webp",
        category: "DEATH METAL"
      },
      {
        title:'Mangled Carpenter',
        link:'./mangled-carpenter.html',
        img:'dist/img/deathmetal/mangled-carpenter1.webp',
        category:'DEATH METAL'
      },
      {
        title: "Marble Tomb",
        link: "./marble-tomb.html",
        img: "dist/img/blackmetal/marble-tomb.webp",
        category: "BLACK METAL"
      },
      {
        title: "A Moment In Pompeii",
        link: "./a-moment-in-pompeii.html",
        img: "dist/img/metalcore/a-moment-in-pompeii.webp",
        category: "METALCORE"
      },
      {
        title: "mothaltar",
        link: "./mothaltar.html",
        img: "dist/img/metalcore/mothaltar.webp",
        category: "METALCORE"
      },
      {
        title: "My Place Was Taken",
        link: "./my-place-was-taken.html",
        img: "dist/img/deathcore/my-place-was-taken-logo.webp",
        category: "DEATHCORE"
      },
      {
        title: "Ninjaloot",
        link: "./ninjaloot.html",
        img: "dist/img/metalcore/ninjaloot2.webp",
        category: "METALCORE"
      },
      {
        title: "Not Beneath",
        link: "./not-beneath.html",
        img: "dist/img/metalcore/not-beneath.webp",
        category: "METALCORE"
      },
      {
        title: "Nyctalopia",
        link: "./nyctalopia.html",
        img: "dist/img/deathmetal/nyctalopia.webp",
        category: "DEATH METAL"
      },
      {
        title: "Oh, The Depth",
        link: "./oh-the-depth.html",
        img: "dist/img/deathcore/oh-the-depth.webp",
        category: "DEATHCORE"
      },
      {
        title: "Oh, Redeemer",
        link: "./oh-redeemer.html",
        img: "dist/img/metalcore/oh-redeemer.webp",
        category: "METALCORE"
      },
      {
        title:'Pantokrator',
        link:'./pantokrator.html',
        img:'dist/img/deathmetal/pantokrator.webp',
        category:'DEATH METAL'
      },
      {
        title: "Parallax Withering",
        link: "./parallax-withering.html",
        img: "dist/img/deathcore/parallax-withering.jpg",
        category: "DEATHCORE"
      },
      {
        title: "Recreate The Sun",
        link: "./recreate-the-sun.html",
        img: "dist/img/deathmetal/recreate-the-sun.webp",
        category: "DEATH METAL"
      },
      {
        title: "Renascent",
        link: "./renascent.html",
        img: "dist/img/deathmetal/renascent.webp",
        category: "DEATH METAL"
      },
      {
        title: "Revivalist",
        link: "./revivalist.html",
        img: "dist/img/hardcore/revivalist.webp",
        category: "HARDCORE"
      },
      {
        title: "Roots of Tragedy",
        link: "./roots-of-tragedy.html",
        img: "dist/img/extreme-metal/roots-of-tragedy.webp",
        category: "EXTREME METAL"
      },
      {
        title: "Roselyn",
        link: "./roselyn.html",
        img: "dist/img/hardcore/roselyn.webp",
        category: "HARDCORE"
      },
      {
        title: "Sabbatariam",
        link: "./sabbatariam.html",
        img: "dist/img/deathmetal/sabbatariam.webp",
        category: "DEATH METAL"
      },
      {
        title: "The Saving",
        link: "./the-saving.html",
        img: "dist/img/metalcore/thesaving1.webp",
        category: "METALCORE"
      },
      {
        title: "Scarlet Oath",
        link: "./scarlet-oath.html",
        img: "dist/img/extreme-metal/scarlet-oat1.jpg",
        category: "EXTREME METAL"
      },
      {
        title:'Screaming Into The Void',
        link:'./screaming-into-the-void.html',
        img:'dist/img/deathmetal/screaming-into-the-void.webp',
        category:'DEATH METAL'
      },
      {
        title: "Searching Serenity",
        link: "./searching-serenity.html",
        img: "dist/img/deathcore/searchingserenity1.webp",
        category: "DEATHCORE"
      },
      {
        title: "A Secret Ending",
        link: "./a-secret-ending.html",
        img: "dist/img/deathcore/a-secret-ending.webp",
        category: "DEATHCORE"
      },
      {
        title: "Separatist",
        link: "./separatist.html",
        img: "dist/img/deathmetal/separatist1.jpg",
        category: "DEATH METAL"
      },
      {
        title: "Shadowmourne",
        link: "./shadowmourne.html",
        img: "dist/img/blackmetal/shadowmournelogo.webp",
        category: "BLACK METAL"
      },
      {
        title: "Shamash",
        link: "./shamash.html",
        img: "dist/img/deathmetal/shamash1.webp",
        category: "DEATH METAL"
      },
      /*{
            title: 'Spite The Beast',
            link:'./afterimage.html',
            img:'dist/img/deathmetal/hashem.webp',
            category:'HARDCORE'
          },*/
      {
        title: "Silence The Assembly",
        link: "./silence-the-assembly.html",
        img: "dist/img/metalcore/silence-the-assembly.webp",
        category: "METALCORE"
      },
      {
        title: "Since The Death",
        link: "./since-the-death.html",
        img: "dist/img/extreme-metal/since-the-death1.webp",
        category: "EXTREME METAL"
      },
      {
        title: "Skald In Veum",
        link: "./skald-in-veum.html",
        img: "dist/img/blackmetal/skaldlogo.webp",
        category: "BLACK METAL"
      },
      {
        title: "Solamors",
        link: "./solamors.html",
        img: "dist/img/deathmetal/solamors.webp",
        category: "DEATH METAL"
      },
      {
        title: "Sorrowstorm",
        link: "./sorrowstorm.html",
        img: "dist/img/blackmetal/sorrowstormlogo.webp",
        category: "BLACK METAL"
      },
      {
        title: "Symphony of Heaven",
        link: "./symphony-of-heaven.html",
        img: "dist/img/deathmetal/symphonyofheavenlogo.webp",
        category: "DEATH METAL"
      },
      {
        title: "The Synics Awakening",
        link: "./the-synics-awakening.html",
        img: "dist/img/deathmetal/the-synics-awakening.webp",
        category: "DEATH METAL"
      },
      {
        title: "Syringe",
        link: "./syringe.html",
        img: "dist/img/deathmetal/syringe.webp",
        category: "DEATH METAL"
      },
      {
        title: "Tax Collector",
        link: "./tax-collector.html",
        img: "dist/img/metalcore/taxcollector.webp",
        category: "METALCORE"
      },
      {
        title: "Theoptia",
        link: "./theoptia.html",
        img: "dist/img/deathmetal/theoptia1.webp",
        category: "DEATH METAL"
      },
      {
        title: "This Divided World",
        link: "./this-divided-world.html",
        img: "dist/img/deathcore/this-divided-world-logo.webp",
        category: "DEATHCORE"
      },
      {
        title: "A Thousand Times Repent",
        link: "./a-thousand-times-repent.html",
        img: "dist/img/deathcore/atr.webp",
        category: "DEATHCORE"
      },
      {
        title: "Throne of Awful Splendor",
        link: "./throne-of-awful-splendor.html",
        img: "dist/img/deathmetal/toas.jpg",
        category: "DEATH METAL"
      },
      {
        title: "TIMŌRĀTUS",
        link: "./timoratus.html",
        img: "dist/img/metal/timoratus1.jpg",
        category: "EXTREME METAL"
      },
      {
        title: "Vials of Wrath",
        link: "./vials-of-wrath.html",
        img: "dist/img/blackmetal/vials-of-wrath.webp",
        category: "BLACK METAL"
      },
      {
        title: "The Weeping Gate",
        link: "./the-weeping-gate.html",
        img: "dist/img/deathmetal/theweepinggatelogo.jpg",
        category: "DEATH METAL"
      },
      {
        title: "Weeping Hour",
        link: "./weeping-hour.html",
        img: "dist/img/metalcore/weeping-hour.webp",
        category: "METALCORE"
      },
      {
        title: "What We Do In Secret",
        link: "./what-we-do-in-secret.html",
        img: "dist/img/hardcore/what-we-do-in-secret.webp",
        category: "HARDCORE"
      },
      {
        title: "Windvent",
        link: "./windvent.html",
        img: "dist/img/hardcore/windvent.jpg",
        category: "HARDCORE"
      },
      {
        title: "Your Hands Write History",
        link: "./yhwh.html",
        img: "dist/img/metalcore/yhwh.webp",
        category: "METALCORE"
      }
    ]
  },

  methods: {
    setFilter: function(filter) {
      this.currentFilter = filter;
    }
  }
});
