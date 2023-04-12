const STEPS = {
  begin: {page: 'begin', previous: "", next: "chooseSkinType"},
  chooseSkinType: {page: 'chooseSkinType', previous: "begin", next: ""},
  combination_first_page: {page: 'combination_first_page', next: "combination_create", previous: "chooseSkinType"},
  combination_create: {page: 'combination_create', next: "combination_choose_routine", previous: "combinationFirstPage", middleBack: 'combinationFirstPage'},
  combination_choose_routine: {page: 'combination_choose_routine', daytime: 'combination_daytime_routine', night: "combination_night_routine", previous: 'combination_create'},
  combination_night_routine: {page: 'combination_night_routine', routine: 'combination', previous: 'combination_choose_routine', end: 'nightRoutine'},
  combination_daytime_routine: {page: 'combination_daytime_routine', routine: 'combination', previous: 'combination_choose_routine', end: 'daytimeRoutine'},

  oily_first_page: {page: 'oily_first_page', next: "oily_create", previous: "chooseSkinType"},
  oily_middle: {page: 'oily_middle', next: "oily_create", previous: "chooseSkinType"},
  oily_create: {page: 'oily_create', next: "oily_choose_routine", previous: "oily_first_page", middleBack: 'middleContent'},
  oily_choose_routine: {page: 'oily_choose_routine', daytime: 'oily_daytime_routine', night: "oily_night_routine"},
  oily_night_routine: {page: 'oily_night_routine', routine: 'oily', previous: 'oily_choose_routine', end: 'nightRoutine'},
  oily_daytime_routine: {page: 'oily_daytime_routine', routine: 'oily', previous: 'oily_choose_routine', end: 'daytimeRoutine'},

  normal_first_page: {page: 'normal_first_page', next: "normal_middle", previous: "chooseSkinType"},
  normal_middle: {page: 'normal_middle', next: "normal_create", previous: "normalFirstPage"},
  normal_create: {page: 'normal_create', next: "normal_choose_routine", previous: "normal_first_page", middleBack: 'middleContent'},
  normal_choose_routine: {page: 'normal_choose_routine', daytime: 'normal_daytime_routine', night: "normal_night_routine", previous: "createRoutine"},
  normal_night_routine: {page: 'normal_night_routine', routine: 'normal', previous: 'normal_choose_routine', end: 'nightRoutine'},
  normal_daytime_routine: {page: 'normal_daytime_routine', routine: 'normal', previous: 'normal_choose_routine', end: 'daytimeRoutine'},

  dry_first_page: {page: 'dry_first_page', next: "dry_create", previous: "chooseSkinType"},
  dry_middle: {page: 'dry_middle', next: "dry_create", previous: "dryFirstPage"},
  dry_create: {page: 'dry_create', next: "dry_choose_routine", previous: "dry_middle", middleBack: 'middleContent'},
  dry_choose_routine: {page: 'dry_choose_routine', daytime: 'dry_daytime_routine', night: "dry_night_routine"},
  dry_night_routine: {page: 'dry_night_routine', routine: 'dry', previous: 'dry_choose_routine', end: 'nightRoutine'},
  dry_daytime_routine: {page: 'dry_daytime_routine', routine: 'dry', previous: 'dry_choose_routine', end: 'daytimeRoutine'},

  ending: 'ending'
}