# CHANGELOG


## v0.11.1 (2024-10-14)

### Fixes

* fix: correct issues related to navigation in conjunction with locale (#148) ([`9e200c7`](https://github.com/PrayTeam/scriptured-prayer/commit/9e200c703a7bc2531d87d47578f8e26a8304bd9f))


## v0.11.0 (2024-10-13)

### Features

* feat: add improved instructions on homepage (#147) ([`84b32ea`](https://github.com/PrayTeam/scriptured-prayer/commit/84b32ea38256746c5f8749d9c3cfa4692da84261))


## v0.10.4 (2024-10-13)

### Fixes

* fix: correct react app locale convention (#146) ([`7790af4`](https://github.com/PrayTeam/scriptured-prayer/commit/7790af4b112c523dc8947ff953bdf22c0e4991c6))


## v0.10.3 (2024-10-13)

### Fixes

* fix: correct visual bugs and requests associated with prayer decks (#145)

* fix: correct visual bugs and requests associated with prayer decks

* fix: correct incorrect padding value on nested screens ([`7cffbf8`](https://github.com/PrayTeam/scriptured-prayer/commit/7cffbf856b8df4f902a1b8cfecd1d637729a2de8))

* fix: remove root route from dev_urls ([`a6533b0`](https://github.com/PrayTeam/scriptured-prayer/commit/a6533b03eb0a3f92fd41334d24657f82835ca0ad))


## v0.10.2 (2024-10-11)

### Fixes

* fix: correct missing slash in static files path (#144) ([`d97fc23`](https://github.com/PrayTeam/scriptured-prayer/commit/d97fc2379079e3538bc5da942809f4530b24c21f))


## v0.10.1 (2024-10-11)

### Chores

* chore(ci/cd): daemon_reload before restarting gunicorn ([`5b75f82`](https://github.com/PrayTeam/scriptured-prayer/commit/5b75f829e443b8629bb66a3db146249a5f632a4c))

### Fixes

* fix: space ([`18971a2`](https://github.com/PrayTeam/scriptured-prayer/commit/18971a2ac70dde0b25e000adca19b15562c098ea))

* fix: move admin route to / (from /en) ([`a1f4e9d`](https://github.com/PrayTeam/scriptured-prayer/commit/a1f4e9d6de920961f9c34031e593b86815f4d85b))

### Unknown

* Merge pull request #143 from PrayTeam/temp

fix: space ([`6f2d1a2`](https://github.com/PrayTeam/scriptured-prayer/commit/6f2d1a2b218e7a7f796636cc488b6c97358a7cfa))


## v0.10.0 (2024-10-09)

### Features

* feat: add request starters (#142) ([`af03bfe`](https://github.com/PrayTeam/scriptured-prayer/commit/af03bfee08c64896d93a1f7a4d610174f4ed4bc1))


## v0.9.0 (2024-10-09)

### Features

* feat: add privacy policy and copyright info (#141) ([`37199fb`](https://github.com/PrayTeam/scriptured-prayer/commit/37199fb549e531a170565c8112025687acbba8cb))


## v0.8.2 (2024-09-18)

### Fixes

* fix: remove the locale from the react app basename (#139) ([`7ea08ef`](https://github.com/PrayTeam/scriptured-prayer/commit/7ea08ef1938637e14ec565bb8206fe17164481b3))


## v0.8.1 (2024-08-29)

### Fixes

* fix: load cards and serializer issues after removing modeltranslation ([`0ebe53f`](https://github.com/PrayTeam/scriptured-prayer/commit/0ebe53ff87c3a18f343de5d7bd041be9216bf243))

* fix: cardApi is using the wrong filter ([`0b6e92f`](https://github.com/PrayTeam/scriptured-prayer/commit/0b6e92f199d3844e3314f0012d3b40f28d24e326))

### Unknown

* Merge pull request #138 from PrayTeam/fix-ansible-DB-encoding

Minor fixes from modeltranslation removal and fix cardApi filter ([`8db716a`](https://github.com/PrayTeam/scriptured-prayer/commit/8db716a5d24b37011764d11183fbaaea27cdfa30))


## v0.8.0 (2024-08-29)

### Features

* feat: remove modeltranslation and update django ([`e3ee243`](https://github.com/PrayTeam/scriptured-prayer/commit/e3ee24374c6930485a83135290aa234d47575ff1))

### Fixes

* fix: use /api instead of /en/api for the api endpoint ([`65c8123`](https://github.com/PrayTeam/scriptured-prayer/commit/65c8123c4e9c1d25bda1647fc6510288852ea2f9))

* fix: set DB encoding to UTF8 ([`dd70ddb`](https://github.com/PrayTeam/scriptured-prayer/commit/dd70ddb883b58c7acf867d31c7dbf40b0f687715))

### Unknown

* Merge pull request #137 from PrayTeam/fix-ansible-DB-encoding

Remove modeltranslation from django ([`fff5457`](https://github.com/PrayTeam/scriptured-prayer/commit/fff54572092aea3ade7f8dd2c4b2fc7556de938a))


## v0.7.1 (2024-08-28)

### Continuous Integration

* ci: start and enable postgres in common if it has been initialized ([`9b499d5`](https://github.com/PrayTeam/scriptured-prayer/commit/9b499d52849185b039b1ed247771487e4e049e20))

* ci: start postgres before attempting to drop the database ([`a306d84`](https://github.com/PrayTeam/scriptured-prayer/commit/a306d84802695fc04ad8aca8d966ca26e9bb662d))

* ci: remove db_name check from "Drop the PostgreSQL database". ([`597b79f`](https://github.com/PrayTeam/scriptured-prayer/commit/597b79f794fcad479da1af734f1e73415fe977b7))

* ci: remove the become user for checking if postgres is installed ([`f034008`](https://github.com/PrayTeam/scriptured-prayer/commit/f03400817369644f491682952a1681be28b8ebb1))

* ci: install github3.py earlier in Ansible common. ([`018195b`](https://github.com/PrayTeam/scriptured-prayer/commit/018195b0c2caeec02fb1537ed4d23385e2473e20))

* ci: github3 -> github3.py ([`f092f41`](https://github.com/PrayTeam/scriptured-prayer/commit/f092f418585435433134181daee2ee3b59d416ea))

* ci: add github3 module install for the runner

I'm surprised this is no longer part of the runner image. ([`8c79982`](https://github.com/PrayTeam/scriptured-prayer/commit/8c799824e5cd2dda5b23b10c03f8fa030dfec2a1))

### Features

* feat: general ui cleanup and tweaks ([`9c87746`](https://github.com/PrayTeam/scriptured-prayer/commit/9c877467ae4abdf21039ad7cc5f31e3c7b727dbc))

### Fixes

* fix: correct styles on done button for prayer deck ([`0522acb`](https://github.com/PrayTeam/scriptured-prayer/commit/0522acba9c4d45407a23c8a26eb3e88c51710604))

### Unknown

* Fix-API-endpoint (#136)

* fix: set DB encoding to UTF8

* fix: use /api instead of /en/api for the api endpoint ([`602ad0a`](https://github.com/PrayTeam/scriptured-prayer/commit/602ad0a5e01e582e0f4f838bc68b8b353f43f6a5))

* Merge pull request #128 from PrayTeam/Soyokaze-42-patch-2

ci: github3 -> github3.py ([`7fbb161`](https://github.com/PrayTeam/scriptured-prayer/commit/7fbb1618ff7f5f6afba0b8736e99d25ce9f2b6ed))


## v0.7.0 (2024-08-04)

### Continuous Integration

* ci: remove httpd network connect db sebool option ([`d07a52f`](https://github.com/PrayTeam/scriptured-prayer/commit/d07a52f424c589406acd5e6e290292a625384278))

### Features

* feat: add app navigation (#127) ([`a257e0d`](https://github.com/PrayTeam/scriptured-prayer/commit/a257e0dcdee207c6cd097c0f04b810f4fe45306c))

### Unknown

* Student content (#124)

* feat: merge student content ([`3e5ab97`](https://github.com/PrayTeam/scriptured-prayer/commit/3e5ab971693c2137bc2a614a6e3edf2a82084b1d))

* Various naming improvements (#122)

* chore: improve component and route names

* chore: rename scriptured-prayer-components dir to frontend ([`15aa07a`](https://github.com/PrayTeam/scriptured-prayer/commit/15aa07aeb39ed9c73c79165c63a53fad2ba7fc32))

* Fix CI Bugs (#125)

* ci: remove local copy step from deploy workflow

* Update deploy.yaml

* ci: == -> !=

* ci: && -> ||

* ci: remove quote symbol bug ([`1fc4fec`](https://github.com/PrayTeam/scriptured-prayer/commit/1fc4fec59fe3130b412adb36d992728ca4df7969))

* Merge pull request #123 from PrayTeam/ansible-update

ci: use database socket instead of port ([`1dbe123`](https://github.com/PrayTeam/scriptured-prayer/commit/1dbe1233798dfe9fe7de247bf00a919876d6b574))

* Merge remote-tracking branch 'origin/main' into ansible-update ([`8759ed0`](https://github.com/PrayTeam/scriptured-prayer/commit/8759ed09a16c782d323d079bbd1e3a255a93665c))


## v0.6.1 (2024-06-07)

### Continuous Integration

* ci: use database socket instead of port ([`ea6af24`](https://github.com/PrayTeam/scriptured-prayer/commit/ea6af24d40a6c950574901019a8fba7b8a51829e))

### Fixes

* fix: remove redundant category title in prayer deck (#107) ([`676d751`](https://github.com/PrayTeam/scriptured-prayer/commit/676d75145e3b5d84cb96b1bd2624e0c9fd662b4e))

### Unknown

* Feat/logging swipes (#109)

* chore: create UserCardsRequest and export it

* chore: fix user card response interface

* chore: update Card component to accept UserCardResponse props

* chore: add add field to filter UserCards by card category id

* chore: write useApi method to get usercards and log usercard swipes

* feat: add swipe logging when user is authenticated

* fix: fix 'loading...' text not being replaced after cards loaded

* fix: add csrf token to logCard api method

* fix: correct request url for logging card swipes

* fix: fix __str__ method for UserCardPrayedLog

---------

Co-authored-by: Asher Lloyd <asher.jo.lloyd@gmail.com> ([`b4f9302`](https://github.com/PrayTeam/scriptured-prayer/commit/b4f9302501827f4a611c4a7c9d0adf427a4ee01f))


## v0.6.0 (2024-06-04)

### Features

* feat: add focus card (#88) (#121)

* feat: display inspiration text with each deck

* feat: create focus card

* fix: focus card bugs

* style: differentiate focus card from prompts

* refactor: incorporate inspiration into card component

Every dynamic part of the card displays conditionally, based on the type of response passed in.

* refactor: implement CardProps interface

---------

Co-authored-by: Madison Cagle <78162094+madisoncagle@users.noreply.github.com>
Co-authored-by: LTsoccer <77810494+LTsoccer@users.noreply.github.com> ([`f02f7cd`](https://github.com/PrayTeam/scriptured-prayer/commit/f02f7cd684d0cfa3d3777a8241aa66b04408d86f))


## v0.5.1 (2024-06-02)

### Continuous Integration

* ci: fix database access in deployment ([`76f6c75`](https://github.com/PrayTeam/scriptured-prayer/commit/76f6c755e0a2465b33113c0defb9104d843feeb3))

* ci: make ssh dir for deployment ([`641447c`](https://github.com/PrayTeam/scriptured-prayer/commit/641447c9536f0fcd7123a5d9d1351221c1adb372))

### Fixes

* fix: use pgpass in project root ([`27e0753`](https://github.com/PrayTeam/scriptured-prayer/commit/27e0753d95c5e84dff2129fb2049d39a46274168))

### Unknown

* Merge pull request #120 from PrayTeam/staticroot-option

Staticroot option ([`9568407`](https://github.com/PrayTeam/scriptured-prayer/commit/9568407f78ba8577d59bcf184f3cfc7f61213533))

* Merge pull request #119 from PrayTeam/staticroot-option

ci: make ssh dir for deployment ([`d434cd5`](https://github.com/PrayTeam/scriptured-prayer/commit/d434cd517725120fc741e3b28d3389f3c48b333a))


## v0.5.0 (2024-06-01)

### Chores

* chore(deps): poetry update ([`9f214e6`](https://github.com/PrayTeam/scriptured-prayer/commit/9f214e624bfeb510757d0a8d0156fc4ce833d4b9))

### Continuous Integration

* ci: add ssh with cloudflared tunnel ([`898ee9a`](https://github.com/PrayTeam/scriptured-prayer/commit/898ee9aac79ac4622bde4e59f1df388f57c16c58))

* ci: move the staticfiles dir to /var/ww/html in production ([`7e2cd68`](https://github.com/PrayTeam/scriptured-prayer/commit/7e2cd6891050ea99ff6acd520ab81d8194dbd8be))

### Documentation

* docs: update readme for manual deployment ([`264c23f`](https://github.com/PrayTeam/scriptured-prayer/commit/264c23ffc3393ec28cce90d1ea8a3a50a6f76404))

### Features

* feat: ansible add option for staticroot ([`9cd7177`](https://github.com/PrayTeam/scriptured-prayer/commit/9cd71775d28a1ff770c9a2c3bd352674facfeda9))

* feat: use pgpass from user's home dir ([`35b0c70`](https://github.com/PrayTeam/scriptured-prayer/commit/35b0c70ddae07c19add0096cd33850976dae13e0))

### Fixes

* fix: release on merge (for real this time) ([`4b50e45`](https://github.com/PrayTeam/scriptured-prayer/commit/4b50e4574850d4d65e2824f9852301d868cf7567))

* fix: release on merge ([`75ebce0`](https://github.com/PrayTeam/scriptured-prayer/commit/75ebce0ce6109bc726328d4321cc0d9ef60107dc))

* fix: use /var/gunicorn for venv ([`a0d8328`](https://github.com/PrayTeam/scriptured-prayer/commit/a0d8328f2886adb7d02185291d8c4edd4843ebc9))

* fix: swagger using wrong schema url (#98) ([`35ab0ca`](https://github.com/PrayTeam/scriptured-prayer/commit/35ab0ca8a8cdd8e474fc7739d32a7f4108826c02))

* fix: update ansible to deploy to fedora ([`fd16b98`](https://github.com/PrayTeam/scriptured-prayer/commit/fd16b98139c2170cacfa0499569f4f86b559263d))

* fix: load_cards descriptions ([`d7b41da`](https://github.com/PrayTeam/scriptured-prayer/commit/d7b41da0042c69f3acdb8cefa125458a0fa62a33))

### Unknown

* Merge pull request #118 from PrayTeam/staticroot-option

feat: ansible add option for staticroot ([`4772dc7`](https://github.com/PrayTeam/scriptured-prayer/commit/4772dc7db3725f700add6a6e6ada530e14e453b9))

* Merge pull request #117 from PrayTeam/Soyokaze-42-patch-1

fix: release on merge ([`60d0ba3`](https://github.com/PrayTeam/scriptured-prayer/commit/60d0ba3b3c60c40ea52f9be342f685348be8732d))

* Merge pull request #116 from PrayTeam/deploy-with-cloudflared

Deploy-with-cloudflared ([`f51421e`](https://github.com/PrayTeam/scriptured-prayer/commit/f51421eb3d114e094285630879305d049f1da8d6))

* Merge pull request #92 from PrayTeam/deploy-update

Deploy update ([`591010f`](https://github.com/PrayTeam/scriptured-prayer/commit/591010f6a20628f1c9cd6f524697462200067499))

* Update README.md

Co-authored-by: Asher Lloyd <asher.jo.lloyd@gmail.com> ([`f749267`](https://github.com/PrayTeam/scriptured-prayer/commit/f749267da49dc84ae23a8d9cacc349cff4a99a82))


## v0.4.1 (2024-03-11)

### Fixes

* fix: dev urls in production ([`7d6a5d8`](https://github.com/PrayTeam/scriptured-prayer/commit/7d6a5d88f6e95a88be065a26396f56777c2feeb9))


## v0.4.0 (2024-03-11)

### Continuous Integration

* ci: fix the double run on release ([`4862595`](https://github.com/PrayTeam/scriptured-prayer/commit/48625959ed5bf86d60a177632b86fa0ff35eb643))

### Features

* feat: add ansible automation for deployments ([`2d16221`](https://github.com/PrayTeam/scriptured-prayer/commit/2d16221f07c439fcb53cdbf4976e076b62499014))

### Fixes

* fix: ansible and django code for prod ([`1063378`](https://github.com/PrayTeam/scriptured-prayer/commit/1063378321d847de1d916f2a6b05b2e736dc8bc4))

### Unknown

* Merge pull request #87 from PrayTeam/add-ansible

Add ansible and update for production ([`6f2c13e`](https://github.com/PrayTeam/scriptured-prayer/commit/6f2c13eb575bb77ad7cf841e68a077e575b5d2f1))

* Merge branch 'main' into add-ansible ([`e502fa3`](https://github.com/PrayTeam/scriptured-prayer/commit/e502fa335a5f7d08b1a77aeb65c7daeeaa52ad40))

* Merge branch 'main' into add-ansible ([`379c642`](https://github.com/PrayTeam/scriptured-prayer/commit/379c642c7e453970074c0759d9b27e6878d4d9fa))


## v0.3.1 (2024-03-10)

### Continuous Integration

* ci: run build on PR and prevent running on main when tagged (by semantic release) ([`3cf6813`](https://github.com/PrayTeam/scriptured-prayer/commit/3cf6813f0e74f22d5208a02af42669973d718273))

### Fixes

* fix: remove reference to localhost in production env ([`d21dc25`](https://github.com/PrayTeam/scriptured-prayer/commit/d21dc256349bb9258b44a735f9386b0267d8de59))

### Unknown

* Merge pull request #86 from PrayTeam/fix/deployment-urls

fix: remove reference to localhost in production env ([`098e6fe`](https://github.com/PrayTeam/scriptured-prayer/commit/098e6fe75008735b2ad008c6d63198d22224dad2))


## v0.3.0 (2024-03-05)

### Features

* feat: hard code links to Prayer Decks on Info view (#81)

* feat: hard code link to Prayer Decks on Info view

Removed prayer decks from protected routes.
This gives guest (un-authenticated) users access to the 6 pre-made prayer decks.

* refactor: split demo prayer deck logic into hook and effect

---------

Co-authored-by: Asher Lloyd <asher.jo.lloyd@gmail.com> ([`b0062ad`](https://github.com/PrayTeam/scriptured-prayer/commit/b0062ade933b8579017946a5bd2d35df6d77f5f6))


## v0.2.0 (2024-03-05)

### Features

* feat: separate dev settings ([`02cf6db`](https://github.com/PrayTeam/scriptured-prayer/commit/02cf6db022d419a33a2d85e53fae9f4b9652a9c9))

### Fixes

* fix: collect static error in ci ([`9868201`](https://github.com/PrayTeam/scriptured-prayer/commit/9868201257c7dfd71d4b7de1252770044fce1a7e))

* fix: poetry error in ci ([`50951f8`](https://github.com/PrayTeam/scriptured-prayer/commit/50951f897020fac49588057cc0033df855d0294c))

### Unknown

* Merge pull request #83 from PrayTeam/separate-django-dev-settigns

feat: separate dev settings ([`774e7cb`](https://github.com/PrayTeam/scriptured-prayer/commit/774e7cb0496457f38b69b812b25e08daeae15571))


## v0.1.3 (2024-03-04)

### Chores

* chore: poetry update ([`9239708`](https://github.com/PrayTeam/scriptured-prayer/commit/92397088524c30a5087caa783d1bf3fc11b9735f))

### Continuous Integration

* ci: remove full path to poetry ([`d610ba4`](https://github.com/PrayTeam/scriptured-prayer/commit/d610ba43d1d17319a20a1f0a67875d64b11fddc2))

* ci: add tld in the release tarball ([`0c85581`](https://github.com/PrayTeam/scriptured-prayer/commit/0c85581833f341f3aaccfdf667e6c6e76798b246))

### Fixes

* fix: add static files to release ([`745fd5e`](https://github.com/PrayTeam/scriptured-prayer/commit/745fd5eb3d5227f736ddbfd8dad53ce4818613fa))

### Unknown

* Merge branch 'main' of github.com:PrayTeam/scriptured-prayer ([`938d050`](https://github.com/PrayTeam/scriptured-prayer/commit/938d0508a8e1edb2190e135475e047180232cf64))


## v0.1.2 (2024-03-04)

### Continuous Integration

* ci: run semantic-release publish with version ([`806ad25`](https://github.com/PrayTeam/scriptured-prayer/commit/806ad25f212a82e67ac2023536fb14358f753860))

* ci: run semantic-release from poetry ([`e2efc75`](https://github.com/PrayTeam/scriptured-prayer/commit/e2efc75d309c0f42e0aaa41544da5ed82771420a))

### Unknown

* Merge branch 'main' of github.com:PrayTeam/scriptured-prayer ([`fbdacb1`](https://github.com/PrayTeam/scriptured-prayer/commit/fbdacb1aee5781b8723fc31d9bf31fea9c3b37e6))


## v0.1.1 (2024-03-04)

### Fixes

* fix: replace github action for semantic-release with script ([`0c93006`](https://github.com/PrayTeam/scriptured-prayer/commit/0c9300672c39fd92b0907ff2b2ce758deec604bf))

* fix: include requirements file in release ([`4f8dbf9`](https://github.com/PrayTeam/scriptured-prayer/commit/4f8dbf92e415220bf90fba503a1f2e0f94bb8563))


## v0.1.0 (2024-03-04)

### Chores

* chore: blacken the python code ([`9bb17b4`](https://github.com/PrayTeam/scriptured-prayer/commit/9bb17b4c32ed971553ddae5f0627874f38ccccc6))

* chore: update erd ([`cb7ab32`](https://github.com/PrayTeam/scriptured-prayer/commit/cb7ab32611e9849aa13489f70245d9dccf232671))

* chore: removes unused csrf endpoint ([`aa2653c`](https://github.com/PrayTeam/scriptured-prayer/commit/aa2653c93711efc1ebc4099eacb8ed8cda07bd2d))

* chore: set default throttling settings ([`e6e5d73`](https://github.com/PrayTeam/scriptured-prayer/commit/e6e5d734a14ecf476eec31a3e2a30e9434b641f4))

* chore: update django ([`396bc0a`](https://github.com/PrayTeam/scriptured-prayer/commit/396bc0a6f8e4548fee3afb61c7b4b87d5cd5b543))

* chore: remove DS_Store ([`f937367`](https://github.com/PrayTeam/scriptured-prayer/commit/f937367aa2c72034bde4d7e805c8729be8f9cc0d))

* chore: add conventional commit restrictions ([`885fa51`](https://github.com/PrayTeam/scriptured-prayer/commit/885fa51d59731018879245f5f0c5e0c873b2ad82))

* chore: add husky commit lint hook ([`a05b841`](https://github.com/PrayTeam/scriptured-prayer/commit/a05b84187a946978e57bb9ac26145fcf616cb741))

### Code Style

* style: change keyword styling

Also a test commit ([`389912b`](https://github.com/PrayTeam/scriptured-prayer/commit/389912b2146bcdd09aa00f347405a894748a9099))

### Continuous Integration

* ci: initial build workflow ([`7969ad8`](https://github.com/PrayTeam/scriptured-prayer/commit/7969ad88076120d384debaf7c088659b36db6f9b))

### Features

* feat: use category ID instead of name for card filter in api ([`54a99eb`](https://github.com/PrayTeam/scriptured-prayer/commit/54a99eb40b6ed1dcf6df73aedf7c1522a3d864b2))

* feat: add improved visuals and routing for mvp pages ([`02cdc24`](https://github.com/PrayTeam/scriptured-prayer/commit/02cdc24f467573586fc94666e1c9b2c3ee64a1e9))

* feat: add instruction to CardAdmin ([`cc03d61`](https://github.com/PrayTeam/scriptured-prayer/commit/cc03d61a8d30c33cf3434d21dffdbfaea7e3e4e4))

* feat: add instruction to translations ([`d7740a4`](https://github.com/PrayTeam/scriptured-prayer/commit/d7740a4e8bfa1719cf3ade0a2b921a5a707c306e))

* feat: add instruction to categories, cards and their serializers ([`7adb9f1`](https://github.com/PrayTeam/scriptured-prayer/commit/7adb9f18a3d02308239c8010f107719ac880ac25))

* feat: add categories api engpoint ([`ee342eb`](https://github.com/PrayTeam/scriptured-prayer/commit/ee342ebd934cb77a00bf1343a921726da683f273))

* feat: add logout; refactor some styles ([`d780e55`](https://github.com/PrayTeam/scriptured-prayer/commit/d780e55d90c3acfb6876989753b9089e004d2fbd))

* feat: rudimentary authentication ([`517ff24`](https://github.com/PrayTeam/scriptured-prayer/commit/517ff24ea883f59906ce8e8fc454cc3f1755ab5e))

* feat: add api documentation and add limits for cards/usercards ([`6751e17`](https://github.com/PrayTeam/scriptured-prayer/commit/6751e17ec1c84d6f1583e08c3029c202081674ed))

* feat: add GitHub templates and contributing guidelines documentation ([`41050bb`](https://github.com/PrayTeam/scriptured-prayer/commit/41050bb017d9e0517149155cb23833253ac0f94d))

* feat: create BaseViewSet for drf filters ([`2325ee7`](https://github.com/PrayTeam/scriptured-prayer/commit/2325ee7872b1a070bee292867624ae65ff8ddc0b))

* feat: add cards api endpoint ([`0874419`](https://github.com/PrayTeam/scriptured-prayer/commit/0874419da8ba5fa3707ae6e915d42c2252f3675b))

* feat: move scripture references to new table ([`41904c1`](https://github.com/PrayTeam/scriptured-prayer/commit/41904c17d253c5ee1ad1a80e32be8bfc9a6f4f70))

* feat: add genre to categories ([`1e8118b`](https://github.com/PrayTeam/scriptured-prayer/commit/1e8118b43ad4b383aa6fe2c5f01e108d6c3b46a6))

* feat: integrate react app into django site ([`4064a46`](https://github.com/PrayTeam/scriptured-prayer/commit/4064a46297a4eb51debdf68728527318252835b6))

* feat: add routing; general cleanup ([`fb3ccd6`](https://github.com/PrayTeam/scriptured-prayer/commit/fb3ccd60cb8f2445de0827247b2630c10d58ae65))

* feat: add README.md ([`61533cb`](https://github.com/PrayTeam/scriptured-prayer/commit/61533cb63a287348a666bacb3782de54ef631be7))

### Fixes

* fix: use PAT as release token ([`c2e2391`](https://github.com/PrayTeam/scriptured-prayer/commit/c2e2391fcb210ae181936ab97832487b1887ee99))

* fix: install/build from scriptured-prayer-components subdir ([`9b178e4`](https://github.com/PrayTeam/scriptured-prayer/commit/9b178e4c878f16252ab7159fef227e29829a0f0f))

* fix: switch cards request to use category id instead of name (#80) ([`ccd654b`](https://github.com/PrayTeam/scriptured-prayer/commit/ccd654be57edeac20448e91159ad2c519106a163))

* fix: add regex replace to remove strong's numbers from verses (#71)

* fix: add regex replace to remove strong's numbers from verses

* fix: fix error in regex string for strong's number removal ([`f40d398`](https://github.com/PrayTeam/scriptured-prayer/commit/f40d3980e33ebd2132285d739ae2e7b66dac9daf))

* fix: correct visual oddities and make styles more mobile-friendly (#79) ([`b7aabc5`](https://github.com/PrayTeam/scriptured-prayer/commit/b7aabc50e4437916f1b0848301efec856ffd2527))

* fix: resolve tailwind typescript errors ([`ff18652`](https://github.com/PrayTeam/scriptured-prayer/commit/ff18652ee3d285ccd5654d6562adea4f2b3ebfc5))

* fix: correct missing style on deck ([`591c1f7`](https://github.com/PrayTeam/scriptured-prayer/commit/591c1f7df7be9df3bb0e9f4c0cb9ee26c7a15084))

* fix: card and usercard limit div by zero ([`9472405`](https://github.com/PrayTeam/scriptured-prayer/commit/94724055b9d8e0894822c740ab6b816acf0a3eb0))

* fix: resolve merge conflicts ([`e5f48cc`](https://github.com/PrayTeam/scriptured-prayer/commit/e5f48cc1157608b56202ab8861f316ed0fd52ebc))

* fix: correct javascript urls to match new api routes ([`0496639`](https://github.com/PrayTeam/scriptured-prayer/commit/0496639126b007ebf32cb7e109b1e01431e6de7f))

* fix: schema generation ([`cfd82b2`](https://github.com/PrayTeam/scriptured-prayer/commit/cfd82b25b674e6da6029814f9cee9405732ed328))

* fix: add missing local urls to CORS ([`8c1c78e`](https://github.com/PrayTeam/scriptured-prayer/commit/8c1c78e565bc0c36ed68d799a5a2612c07032ff1))

* fix: remove generic issue template ([`91568e9`](https://github.com/PrayTeam/scriptured-prayer/commit/91568e92e9884e84398f4d2695b401fc658dc71d))

* fix: teh typo ([`61a0433`](https://github.com/PrayTeam/scriptured-prayer/commit/61a04338528fcfeb94ada4454fff5f728f9a8a3f))

* fix: add genre to load_cards ([`faeba52`](https://github.com/PrayTeam/scriptured-prayer/commit/faeba528a32c9c569f53d50281b78b6f2a1dbb74))

* fix: use django.contrib.staticfiles ([`9435987`](https://github.com/PrayTeam/scriptured-prayer/commit/94359872a51e1001bb5b3ed5269ca0c55e907cfe))

* fix: apply correct vars per environment; improve django template usage ([`1914680`](https://github.com/PrayTeam/scriptured-prayer/commit/1914680a5cdccb69ece7989294f090757119b5bf))

* fix: give react router all urls not used in django ([`8bb5929`](https://github.com/PrayTeam/scriptured-prayer/commit/8bb5929e94c8c006bb2a000dea671b24d128b2b1))

* fix: allow the admin and auth urls with the spa. ([`4f3f4e0`](https://github.com/PrayTeam/scriptured-prayer/commit/4f3f4e0f113a00c108fe7f0048e6a82b52f652eb))

* fix: resolve merge conflicts ([`8da8acf`](https://github.com/PrayTeam/scriptured-prayer/commit/8da8acf3e75a0fb60734712256cde0503a0d229f))

* fix: remove unused assets and references ([`4218dd9`](https://github.com/PrayTeam/scriptured-prayer/commit/4218dd901f73e349b8e7428e4d35b390d8972d69))

* fix: remove unused .vite directory ([`f80ea36`](https://github.com/PrayTeam/scriptured-prayer/commit/f80ea3622abee787e6af16257d9586f605d7ff70))

* fix: correct argument assignment order in load_bible.py ([`88605ce`](https://github.com/PrayTeam/scriptured-prayer/commit/88605ce7ba3e754878549109c464738345eaad4a))

* fix: add missing README.md ([`4bdb331`](https://github.com/PrayTeam/scriptured-prayer/commit/4bdb3319b8404e625c5622d20379cc8326909d5a))

### Refactoring

* refactor: addresses review feedback for authentication ([`91ded6d`](https://github.com/PrayTeam/scriptured-prayer/commit/91ded6d815521a667ee3ed0e46ac5bec3ba79cbb))

* refactor: switch to yarn ([`e758757`](https://github.com/PrayTeam/scriptured-prayer/commit/e758757b4a53c4579d2ef00f6852519450ac03e9))

* refactor: rename spa-prototype to scriptured-prayer-components ([`a4c0925`](https://github.com/PrayTeam/scriptured-prayer/commit/a4c0925fccb3f848a09cb633843174b60b74f6f1))

### Unknown

* Merge pull request #82 from PrayTeam/fix-postinstall

bug: remove components package.json postinstall script ([`db90cba`](https://github.com/PrayTeam/scriptured-prayer/commit/db90cba1a90c9a93cd0bbc338a9549dc55f6d51b))

* Revert "style: change keyword styling"

This reverts commit 389912b2146bcdd09aa00f347405a894748a9099. ([`a5843a0`](https://github.com/PrayTeam/scriptured-prayer/commit/a5843a07681b83d087024c260141694bb10b54fc))

* bug: remove components package.json postinstall script ([`3841bef`](https://github.com/PrayTeam/scriptured-prayer/commit/3841bef10f2c6565bd3ea6f77b6808ad29c77c70))

* Merge pull request #72 from PrayTeam/ci-build

ci: initial build workflow ([`4b83b3d`](https://github.com/PrayTeam/scriptured-prayer/commit/4b83b3ddafcdff6ee070aeadc4682b0466084672))

* Merge pull request #70 from PrayTeam/card-category-id-filter

feat: use category ID instead of name for card filter in api ([`cd67cf1`](https://github.com/PrayTeam/scriptured-prayer/commit/cd67cf1156012aae1eed268300f0dc779eaffe48))

* Merge pull request #66 from PrayTeam/feat/advertisement-visuals

Update placeholder-ish parts with working routes and better visuals ([`6170a29`](https://github.com/PrayTeam/scriptured-prayer/commit/6170a293306550b4baf1f29e2021ff332ba13f11))

* Merge pull request #65 from PrayTeam/fix-limit-div-by-zero

fix: card and usercard limit div by zero ([`2d3722e`](https://github.com/PrayTeam/scriptured-prayer/commit/2d3722eef9f9109cf358579dcb7d474844a14881))

* Merge pull request #57 from PrayTeam/feat/authentication

feat: rudimentary authentication ([`ee0a0f8`](https://github.com/PrayTeam/scriptured-prayer/commit/ee0a0f819eaf864fafef68fdb23133f020446f64))

* Merge pull request #63 from PrayTeam/feat/categories-api-endpoint

feat: add categories api endpoint ([`dc3ca07`](https://github.com/PrayTeam/scriptured-prayer/commit/dc3ca070a2ea356f7f9d28ad6209a984c921f26b))

* Rename user-story.md to user_story.md ([`bbfcc3c`](https://github.com/PrayTeam/scriptured-prayer/commit/bbfcc3c263081fd03a297f8c746b913a23d29b34))

* Update and rename user-story-template.md to user-story.md ([`baa6abe`](https://github.com/PrayTeam/scriptured-prayer/commit/baa6abec94ed3ef1e9f3e69261c767774e5a00d3))

* Merge pull request #53 from PrayTeam/Backend-MVP-Update

feat: add api documentation and add limits for cards/usercards ([`49c324e`](https://github.com/PrayTeam/scriptured-prayer/commit/49c324e848a5a064d10bc9b6941b4761e267589e))

* Create LICENSE.md ([`14d4dcf`](https://github.com/PrayTeam/scriptured-prayer/commit/14d4dcfa1ac1aaeeb0231b352f2ef46f8c33bf55))

* Merge pull request #47 from PrayTeam/feat/templates-and-guidelines ([`765195c`](https://github.com/PrayTeam/scriptured-prayer/commit/765195c61767f8bb29880495558deeab8818d03f))

* Merge branch 'main' into feat/templates-and-guidelines ([`bc8ded6`](https://github.com/PrayTeam/scriptured-prayer/commit/bc8ded669e6df03e41a82f27ca65c189d0ff9329))

* Merge pull request #45 from PrayTeam/Backend-MVP-Update

Backend-MVP-Update ([`e2e380a`](https://github.com/PrayTeam/scriptured-prayer/commit/e2e380a45adcd52989d0daf1c0c2424ae6306bd2))

* Merge pull request #48 from PrayTeam/Issue-templates-from-builder

Update issue templates ([`babed5f`](https://github.com/PrayTeam/scriptured-prayer/commit/babed5f22db28b1ea47678cfbb9a395b7ee406a1))

* Update issue templates

The template builder wouldn't let me save these without another PR :( ([`fcabd5d`](https://github.com/PrayTeam/scriptured-prayer/commit/fcabd5d15e4196594765c05e94244a8ba68cbb2d))

* Merge pull request #36 from PrayTeam/refactor/spa-prototype

Refactor spa prototype ([`5a3b24b`](https://github.com/PrayTeam/scriptured-prayer/commit/5a3b24be82932b43c8d8beb03839b3b8714cb9b4))

* Add Finish button. Add new schema. ([`bbb7179`](https://github.com/PrayTeam/scriptured-prayer/commit/bbb7179af1da4bafc6e04c9315f74808022598e9))

* Merge branch 'new-schema-drf' into spa-prototype ([`72d6ebb`](https://github.com/PrayTeam/scriptured-prayer/commit/72d6ebb3ff24bab4fa75fbb9eaae560cdcb63648))

* Improve styling and swiper ([`487e937`](https://github.com/PrayTeam/scriptured-prayer/commit/487e9371eac032b57376434f82de4c97d98a4c00))

* initial commit ([`df843c5`](https://github.com/PrayTeam/scriptured-prayer/commit/df843c53cdb43ccb40a4a7f1fde85e61c56f6b42))

* Merge pull request #41 from PrayTeam/fix/bible-loading

fix: correct argument assignment order in load_bible.py ([`c7cf13d`](https://github.com/PrayTeam/scriptured-prayer/commit/c7cf13d5f5a541ae593de6a4657834ecdaa54f14))

* allow filenames with dashes between lang and version ([`caab7f6`](https://github.com/PrayTeam/scriptured-prayer/commit/caab7f6b0516857e4c88fc8710c33c1b517c3eb6))

* Merge pull request #39 from PrayTeam/add_bibles

Add bibles ([`a478189`](https://github.com/PrayTeam/scriptured-prayer/commit/a4781890b8b4f047573adba88fbf3ebcd79c9839))

* add bible version to translations (mostly for the copyright notice) ([`e9195f3`](https://github.com/PrayTeam/scriptured-prayer/commit/e9195f3b50c5e38ef2d03460a6c77736841063dc))

* add translation strings for a few bits in the model ([`e639977`](https://github.com/PrayTeam/scriptured-prayer/commit/e6399778b1fbe16fe47cf53542bdeb872cee75de))

* update readme with scripture reference notes ([`f9d4ed6`](https://github.com/PrayTeam/scriptured-prayer/commit/f9d4ed6c984c2bb1bab23ffdc6b59fb2f0dc5175))

* Merge branch 'main' into add_bibles ([`51b397d`](https://github.com/PrayTeam/scriptured-prayer/commit/51b397df007b279856451d4e3fc8fc0df74c8c40))

* Merge pull request #37 from PrayTeam/add-description

rename text to description ([`842079f`](https://github.com/PrayTeam/scriptured-prayer/commit/842079fa35a9e46a6788dd2f3bd8d9971f285265))

* add usercard last_prayed to API ([`8e9b5f0`](https://github.com/PrayTeam/scriptured-prayer/commit/8e9b5f0a3d31c7b0bc7aca572c4591881bc53267))

* add card description to API ([`8b0d461`](https://github.com/PrayTeam/scriptured-prayer/commit/8b0d4614a55198a32e3d218b2e0cdc060d0d877e))

* rename text to description ([`ee89836`](https://github.com/PrayTeam/scriptured-prayer/commit/ee8983616a1fdcb695a2a4d0b2f8274cac147cea))

* add load_bible command ([`183631d`](https://github.com/PrayTeam/scriptured-prayer/commit/183631dab49864cf564b60f22c73da3d400fa583))

* add bibles to schema, api, and admin ([`745e7db`](https://github.com/PrayTeam/scriptured-prayer/commit/745e7db783484d9a1663ee0d3a0964c2f636ef68))

* remove django templates ([`82fa088`](https://github.com/PrayTeam/scriptured-prayer/commit/82fa08859fd8619db325399e86ffccf4e0e9478a))

* Merge pull request #34 from PrayTeam:new-schema-drf

New-schema-drf ([`01ea26b`](https://github.com/PrayTeam/scriptured-prayer/commit/01ea26ba92aef05bd69917b3a6317d047b72698d))

* disable pagination on api ([`80e1e97`](https://github.com/PrayTeam/scriptured-prayer/commit/80e1e97a34333c8a01f6fccc9f92f1c4017807c7))

* add scripture, rename title, and add category ([`012dce6`](https://github.com/PrayTeam/scriptured-prayer/commit/012dce6151e030aef9ce0b260c70b8c610c1b397))

* add api filter on api/cards for in_prayer_deck ([`0bfca20`](https://github.com/PrayTeam/scriptured-prayer/commit/0bfca2053b04f29efc8345f6b388b41b2ff3cde3))

* Add rest endpoint for ussercards ([`8a9715a`](https://github.com/PrayTeam/scriptured-prayer/commit/8a9715ac3625b78e12d6f5a93a5c075d11663687))

* Update README.md with terms ([`0e1156a`](https://github.com/PrayTeam/scriptured-prayer/commit/0e1156aa062629eef818e4a394dd88aeba74a4dc))

* Merge pull request #20 from PrayTeam/schema-update

Schema-update ([`dd2aa55`](https://github.com/PrayTeam/scriptured-prayer/commit/dd2aa5591a2897c20a38812ccf8014c713acc619))

* fix formatter mangling of html (hopefully last one) ([`3d2d4c7`](https://github.com/PrayTeam/scriptured-prayer/commit/3d2d4c775d7876c1066a4d2ff714ccb5b668e5ab))

* add created/modified fields to admin site ([`f6c02ba`](https://github.com/PrayTeam/scriptured-prayer/commit/f6c02baba580dbd3ce611fd7dbf36e0e9d013bbe))

* set UserCardPrayedLog auto_now_add ([`be426c7`](https://github.com/PrayTeam/scriptured-prayer/commit/be426c7e96ad102a50a1f2d6827c5a4a7874bdd0))

* remove AuditModel from UserCardPrayedLog ([`19588f2`](https://github.com/PrayTeam/scriptured-prayer/commit/19588f2fd95cb995a9c687f08668c950ba1691fd))

* Merge branch 'main' into schema-update ([`0116d3a`](https://github.com/PrayTeam/scriptured-prayer/commit/0116d3a5d16dfab7e86e8a2305ea327cc9274a1e))

* Merge pull request #21 from PrayTeam/rename-prayer_box

rename everything ([`f789c2c`](https://github.com/PrayTeam/scriptured-prayer/commit/f789c2c6268216bce992a5c04b096a0b80755201))

* rename cardbox to prayerapp ([`35f123d`](https://github.com/PrayTeam/scriptured-prayer/commit/35f123d4d0c93f22dca27d0f8ef9cdec099e7310))

* rename everything ([`5ae25c3`](https://github.com/PrayTeam/scriptured-prayer/commit/5ae25c3c94bd857f57fd7aa95a57418ff05c9069))

* remove debug print statements ([`8a13f83`](https://github.com/PrayTeam/scriptured-prayer/commit/8a13f833e59f2824edf26160a306d35f798666f7))

* add erd ([`feef4dd`](https://github.com/PrayTeam/scriptured-prayer/commit/feef4ddd475f6c43eff9166357f3f301c83f2453))

* add created/modified dates/users to models ([`5e3ebf8`](https://github.com/PrayTeam/scriptured-prayer/commit/5e3ebf8390a1e398fbbd391e95eb576db6d77245))

* remove unnecessary imports ([`dc09fd7`](https://github.com/PrayTeam/scriptured-prayer/commit/dc09fd7a1b530ba6f351b84cdcc215f299045596))

* remove prayerdeck model ([`8bbb604`](https://github.com/PrayTeam/scriptured-prayer/commit/8bbb6043304859650e968ce2bff4c20b478ce3ab))

* remove prayerdeckusercard table ([`9668cbb`](https://github.com/PrayTeam/scriptured-prayer/commit/9668cbbeed9c432e8b33f42c61dd2e6ca63b593d))

* update load_cards management command ([`d048e92`](https://github.com/PrayTeam/scriptured-prayer/commit/d048e92359aae4e8cf96bc4a360bd878096294d8))

* update templates after schema changes ([`3090044`](https://github.com/PrayTeam/scriptured-prayer/commit/3090044015c2f8ebdad47287b1f1d16f24df443f))

* add prayerdeckusercards to admin ([`dbffdc3`](https://github.com/PrayTeam/scriptured-prayer/commit/dbffdc353e5a6f3ca075cb4f546c098f1509c47c))

* update urls, views, and templates with new schema. ([`f8d4aa2`](https://github.com/PrayTeam/scriptured-prayer/commit/f8d4aa2bc2d85fa6a923d689c74857e9320bface))

* update erd ([`e3ba63f`](https://github.com/PrayTeam/scriptured-prayer/commit/e3ba63fff07e6f69396650c2d44c2f2c4f1402b9))

* scema changes ([`4502179`](https://github.com/PrayTeam/scriptured-prayer/commit/4502179747f170912ebeac7256dba46857ff3b16))

* Merge pull request #2 from PrayTeam/fix/django-dependencies

fix: add missing README.md ([`d9a9029`](https://github.com/PrayTeam/scriptured-prayer/commit/d9a902910647f149db3dba5364f632291656425b))

* add the pygraphviz poetry group ([`0deb3f8`](https://github.com/PrayTeam/scriptured-prayer/commit/0deb3f88adcbd1277e73bf652c830b4c4bd96d63))

* move poetry to be a dependency ([`4d50334`](https://github.com/PrayTeam/scriptured-prayer/commit/4d503343e755161f7d46248aae3b8e9c799cd7fe))

* add requests to requirements ([`aa0015e`](https://github.com/PrayTeam/scriptured-prayer/commit/aa0015edd62f91b5b9e3678ba216a70349853829))

* use poetry install instead of pip ([`472825d`](https://github.com/PrayTeam/scriptured-prayer/commit/472825dcdbf78ae160ce3cad45369f65a9f33e34))

* first commit ([`27a8475`](https://github.com/PrayTeam/scriptured-prayer/commit/27a84759c02a2107717c56db753d04f28c8ba914))
