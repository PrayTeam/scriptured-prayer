# CHANGELOG


## v0.12.1 (2025-01-21)


## v0.12.0 (2025-01-21)

### Bug Fixes

- Make prayer deck count reflect changes from 592d370f
  ([`739e4aa`](https://github.com/PrayTeam/scriptured-prayer/commit/739e4aa407ef85a2ab1ac024a5fac5d2b57d8c2e))

### Features

- Modify card styles and colors
  ([`1e75fef`](https://github.com/PrayTeam/scriptured-prayer/commit/1e75fef14d93b7ef6dd84a6061d8b1ac192b4379))


## v0.11.3 (2024-12-18)

### Bug Fixes

- **deps**: Update python deps
  ([`ac6bf8d`](https://github.com/PrayTeam/scriptured-prayer/commit/ac6bf8dd886a28711d957337a53a33c44ad4d6c1))

### Continuous Integration

- Only get version after pr merge
  ([`5e96b55`](https://github.com/PrayTeam/scriptured-prayer/commit/5e96b554208555b3e5d2db0fc98c1c7e6a6e1948))

- Remove unused version variable
  ([`d437b5d`](https://github.com/PrayTeam/scriptured-prayer/commit/d437b5dc01b99024f4e0532cfa528908397320ef))


## v0.11.2 (2024-10-15)

### Bug Fixes

- Correct missing basename on react router
  ([#149](https://github.com/PrayTeam/scriptured-prayer/pull/149),
  [`dce2b84`](https://github.com/PrayTeam/scriptured-prayer/commit/dce2b847cbd0dea03c693fda3d01a62e1ceb0340))

* fix: correct missing basename on react router

* fix: correct styling on prayer deck button


## v0.11.1 (2024-10-14)

### Bug Fixes

- Correct issues related to navigation in conjunction with locale
  ([#148](https://github.com/PrayTeam/scriptured-prayer/pull/148),
  [`9e200c7`](https://github.com/PrayTeam/scriptured-prayer/commit/9e200c703a7bc2531d87d47578f8e26a8304bd9f))


## v0.11.0 (2024-10-13)

### Features

- Add improved instructions on homepage
  ([#147](https://github.com/PrayTeam/scriptured-prayer/pull/147),
  [`84b32ea`](https://github.com/PrayTeam/scriptured-prayer/commit/84b32ea38256746c5f8749d9c3cfa4692da84261))


## v0.10.4 (2024-10-13)

### Bug Fixes

- Correct react app locale convention
  ([#146](https://github.com/PrayTeam/scriptured-prayer/pull/146),
  [`7790af4`](https://github.com/PrayTeam/scriptured-prayer/commit/7790af4b112c523dc8947ff953bdf22c0e4991c6))


## v0.10.3 (2024-10-13)

### Bug Fixes

- Correct visual bugs and requests associated with prayer decks
  ([#145](https://github.com/PrayTeam/scriptured-prayer/pull/145),
  [`7cffbf8`](https://github.com/PrayTeam/scriptured-prayer/commit/7cffbf856b8df4f902a1b8cfecd1d637729a2de8))

* fix: correct visual bugs and requests associated with prayer decks

* fix: correct incorrect padding value on nested screens

- Remove root route from dev_urls
  ([`a6533b0`](https://github.com/PrayTeam/scriptured-prayer/commit/a6533b03eb0a3f92fd41334d24657f82835ca0ad))


## v0.10.2 (2024-10-11)

### Bug Fixes

- Correct missing slash in static files path
  ([#144](https://github.com/PrayTeam/scriptured-prayer/pull/144),
  [`d97fc23`](https://github.com/PrayTeam/scriptured-prayer/commit/d97fc2379079e3538bc5da942809f4530b24c21f))


## v0.10.1 (2024-10-11)

### Bug Fixes

- Move admin route to / (from /en)
  ([`a1f4e9d`](https://github.com/PrayTeam/scriptured-prayer/commit/a1f4e9d6de920961f9c34031e593b86815f4d85b))

- Space
  ([`18971a2`](https://github.com/PrayTeam/scriptured-prayer/commit/18971a2ac70dde0b25e000adca19b15562c098ea))

### Chores

- **ci/cd**: Daemon_reload before restarting gunicorn
  ([`5b75f82`](https://github.com/PrayTeam/scriptured-prayer/commit/5b75f829e443b8629bb66a3db146249a5f632a4c))


## v0.10.0 (2024-10-09)

### Features

- Add request starters ([#142](https://github.com/PrayTeam/scriptured-prayer/pull/142),
  [`af03bfe`](https://github.com/PrayTeam/scriptured-prayer/commit/af03bfee08c64896d93a1f7a4d610174f4ed4bc1))


## v0.9.0 (2024-10-09)

### Features

- Add privacy policy and copyright info
  ([#141](https://github.com/PrayTeam/scriptured-prayer/pull/141),
  [`37199fb`](https://github.com/PrayTeam/scriptured-prayer/commit/37199fb549e531a170565c8112025687acbba8cb))


## v0.8.2 (2024-09-18)

### Bug Fixes

- Remove the locale from the react app basename
  ([#139](https://github.com/PrayTeam/scriptured-prayer/pull/139),
  [`7ea08ef`](https://github.com/PrayTeam/scriptured-prayer/commit/7ea08ef1938637e14ec565bb8206fe17164481b3))


## v0.8.1 (2024-08-29)

### Bug Fixes

- Cardapi is using the wrong filter
  ([`0b6e92f`](https://github.com/PrayTeam/scriptured-prayer/commit/0b6e92f199d3844e3314f0012d3b40f28d24e326))

- Load cards and serializer issues after removing modeltranslation
  ([`0ebe53f`](https://github.com/PrayTeam/scriptured-prayer/commit/0ebe53ff87c3a18f343de5d7bd041be9216bf243))


## v0.8.0 (2024-08-29)

### Bug Fixes

- Set DB encoding to UTF8
  ([`dd70ddb`](https://github.com/PrayTeam/scriptured-prayer/commit/dd70ddb883b58c7acf867d31c7dbf40b0f687715))

- Use /api instead of /en/api for the api endpoint
  ([`65c8123`](https://github.com/PrayTeam/scriptured-prayer/commit/65c8123c4e9c1d25bda1647fc6510288852ea2f9))

### Features

- Remove modeltranslation and update django
  ([`e3ee243`](https://github.com/PrayTeam/scriptured-prayer/commit/e3ee24374c6930485a83135290aa234d47575ff1))


## v0.7.1 (2024-08-28)

### Bug Fixes

- Correct styles on done button for prayer deck
  ([`0522acb`](https://github.com/PrayTeam/scriptured-prayer/commit/0522acba9c4d45407a23c8a26eb3e88c51710604))

### Continuous Integration

- Add github3 module install for the runner
  ([`8c79982`](https://github.com/PrayTeam/scriptured-prayer/commit/8c799824e5cd2dda5b23b10c03f8fa030dfec2a1))

I'm surprised this is no longer part of the runner image.

- Github3 -> github3.py
  ([`f092f41`](https://github.com/PrayTeam/scriptured-prayer/commit/f092f418585435433134181daee2ee3b59d416ea))

- Install github3.py earlier in Ansible common.
  ([`018195b`](https://github.com/PrayTeam/scriptured-prayer/commit/018195b0c2caeec02fb1537ed4d23385e2473e20))

- Remove db_name check from "Drop the PostgreSQL database".
  ([`597b79f`](https://github.com/PrayTeam/scriptured-prayer/commit/597b79f794fcad479da1af734f1e73415fe977b7))

- Remove the become user for checking if postgres is installed
  ([`f034008`](https://github.com/PrayTeam/scriptured-prayer/commit/f03400817369644f491682952a1681be28b8ebb1))

- Start and enable postgres in common if it has been initialized
  ([`9b499d5`](https://github.com/PrayTeam/scriptured-prayer/commit/9b499d52849185b039b1ed247771487e4e049e20))

- Start postgres before attempting to drop the database
  ([`a306d84`](https://github.com/PrayTeam/scriptured-prayer/commit/a306d84802695fc04ad8aca8d966ca26e9bb662d))

### Features

- General ui cleanup and tweaks
  ([`9c87746`](https://github.com/PrayTeam/scriptured-prayer/commit/9c877467ae4abdf21039ad7cc5f31e3c7b727dbc))


## v0.7.0 (2024-08-04)

### Continuous Integration

- Remove httpd network connect db sebool option
  ([`d07a52f`](https://github.com/PrayTeam/scriptured-prayer/commit/d07a52f424c589406acd5e6e290292a625384278))

### Features

- Add app navigation ([#127](https://github.com/PrayTeam/scriptured-prayer/pull/127),
  [`a257e0d`](https://github.com/PrayTeam/scriptured-prayer/commit/a257e0dcdee207c6cd097c0f04b810f4fe45306c))


## v0.6.1 (2024-06-07)

### Bug Fixes

- Remove redundant category title in prayer deck
  ([#107](https://github.com/PrayTeam/scriptured-prayer/pull/107),
  [`676d751`](https://github.com/PrayTeam/scriptured-prayer/commit/676d75145e3b5d84cb96b1bd2624e0c9fd662b4e))

### Continuous Integration

- Use database socket instead of port
  ([`ea6af24`](https://github.com/PrayTeam/scriptured-prayer/commit/ea6af24d40a6c950574901019a8fba7b8a51829e))


## v0.6.0 (2024-06-04)

### Features

- Add focus card (#88) ([#121](https://github.com/PrayTeam/scriptured-prayer/pull/121),
  [`f02f7cd`](https://github.com/PrayTeam/scriptured-prayer/commit/f02f7cd684d0cfa3d3777a8241aa66b04408d86f))

* feat: display inspiration text with each deck

* feat: create focus card

* fix: focus card bugs

* style: differentiate focus card from prompts

* refactor: incorporate inspiration into card component

Every dynamic part of the card displays conditionally, based on the type of response passed in.

* refactor: implement CardProps interface

---------

Co-authored-by: Madison Cagle <78162094+madisoncagle@users.noreply.github.com>

Co-authored-by: LTsoccer <77810494+LTsoccer@users.noreply.github.com>


## v0.5.1 (2024-06-02)

### Bug Fixes

- Use pgpass in project root
  ([`27e0753`](https://github.com/PrayTeam/scriptured-prayer/commit/27e0753d95c5e84dff2129fb2049d39a46274168))

### Continuous Integration

- Fix database access in deployment
  ([`76f6c75`](https://github.com/PrayTeam/scriptured-prayer/commit/76f6c755e0a2465b33113c0defb9104d843feeb3))

- Make ssh dir for deployment
  ([`641447c`](https://github.com/PrayTeam/scriptured-prayer/commit/641447c9536f0fcd7123a5d9d1351221c1adb372))


## v0.5.0 (2024-06-01)

### Bug Fixes

- Load_cards descriptions
  ([`d7b41da`](https://github.com/PrayTeam/scriptured-prayer/commit/d7b41da0042c69f3acdb8cefa125458a0fa62a33))

- Release on merge
  ([`75ebce0`](https://github.com/PrayTeam/scriptured-prayer/commit/75ebce0ce6109bc726328d4321cc0d9ef60107dc))

- Release on merge (for real this time)
  ([`4b50e45`](https://github.com/PrayTeam/scriptured-prayer/commit/4b50e4574850d4d65e2824f9852301d868cf7567))

- Swagger using wrong schema url ([#98](https://github.com/PrayTeam/scriptured-prayer/pull/98),
  [`35ab0ca`](https://github.com/PrayTeam/scriptured-prayer/commit/35ab0ca8a8cdd8e474fc7739d32a7f4108826c02))

- Update ansible to deploy to fedora
  ([`fd16b98`](https://github.com/PrayTeam/scriptured-prayer/commit/fd16b98139c2170cacfa0499569f4f86b559263d))

- Use /var/gunicorn for venv
  ([`a0d8328`](https://github.com/PrayTeam/scriptured-prayer/commit/a0d8328f2886adb7d02185291d8c4edd4843ebc9))

### Chores

- **deps**: Poetry update
  ([`9f214e6`](https://github.com/PrayTeam/scriptured-prayer/commit/9f214e624bfeb510757d0a8d0156fc4ce833d4b9))

### Continuous Integration

- Add ssh with cloudflared tunnel
  ([`898ee9a`](https://github.com/PrayTeam/scriptured-prayer/commit/898ee9aac79ac4622bde4e59f1df388f57c16c58))

- Move the staticfiles dir to /var/ww/html in production
  ([`7e2cd68`](https://github.com/PrayTeam/scriptured-prayer/commit/7e2cd6891050ea99ff6acd520ab81d8194dbd8be))

### Documentation

- Update readme for manual deployment
  ([`264c23f`](https://github.com/PrayTeam/scriptured-prayer/commit/264c23ffc3393ec28cce90d1ea8a3a50a6f76404))

### Features

- Ansible add option for staticroot
  ([`9cd7177`](https://github.com/PrayTeam/scriptured-prayer/commit/9cd71775d28a1ff770c9a2c3bd352674facfeda9))

- Use pgpass from user's home dir
  ([`35b0c70`](https://github.com/PrayTeam/scriptured-prayer/commit/35b0c70ddae07c19add0096cd33850976dae13e0))


## v0.4.1 (2024-03-11)

### Bug Fixes

- Dev urls in production
  ([`7d6a5d8`](https://github.com/PrayTeam/scriptured-prayer/commit/7d6a5d88f6e95a88be065a26396f56777c2feeb9))


## v0.4.0 (2024-03-11)

### Bug Fixes

- Ansible and django code for prod
  ([`1063378`](https://github.com/PrayTeam/scriptured-prayer/commit/1063378321d847de1d916f2a6b05b2e736dc8bc4))

### Continuous Integration

- Fix the double run on release
  ([`4862595`](https://github.com/PrayTeam/scriptured-prayer/commit/48625959ed5bf86d60a177632b86fa0ff35eb643))

### Features

- Add ansible automation for deployments
  ([`2d16221`](https://github.com/PrayTeam/scriptured-prayer/commit/2d16221f07c439fcb53cdbf4976e076b62499014))


## v0.3.1 (2024-03-10)

### Bug Fixes

- Remove reference to localhost in production env
  ([`d21dc25`](https://github.com/PrayTeam/scriptured-prayer/commit/d21dc256349bb9258b44a735f9386b0267d8de59))

### Continuous Integration

- Run build on PR and prevent running on main when tagged (by semantic release)
  ([`3cf6813`](https://github.com/PrayTeam/scriptured-prayer/commit/3cf6813f0e74f22d5208a02af42669973d718273))


## v0.3.0 (2024-03-05)

### Features

- Hard code links to Prayer Decks on Info view
  ([#81](https://github.com/PrayTeam/scriptured-prayer/pull/81),
  [`b0062ad`](https://github.com/PrayTeam/scriptured-prayer/commit/b0062ade933b8579017946a5bd2d35df6d77f5f6))

* feat: hard code link to Prayer Decks on Info view

Removed prayer decks from protected routes. This gives guest (un-authenticated) users access to the
  6 pre-made prayer decks.

* refactor: split demo prayer deck logic into hook and effect

---------

Co-authored-by: Asher Lloyd <asher.jo.lloyd@gmail.com>


## v0.2.0 (2024-03-05)

### Bug Fixes

- Collect static error in ci
  ([`9868201`](https://github.com/PrayTeam/scriptured-prayer/commit/9868201257c7dfd71d4b7de1252770044fce1a7e))

- Poetry error in ci
  ([`50951f8`](https://github.com/PrayTeam/scriptured-prayer/commit/50951f897020fac49588057cc0033df855d0294c))

### Features

- Separate dev settings
  ([`02cf6db`](https://github.com/PrayTeam/scriptured-prayer/commit/02cf6db022d419a33a2d85e53fae9f4b9652a9c9))


## v0.1.3 (2024-03-04)

### Bug Fixes

- Add static files to release
  ([`745fd5e`](https://github.com/PrayTeam/scriptured-prayer/commit/745fd5eb3d5227f736ddbfd8dad53ce4818613fa))

### Chores

- Poetry update
  ([`9239708`](https://github.com/PrayTeam/scriptured-prayer/commit/92397088524c30a5087caa783d1bf3fc11b9735f))

### Continuous Integration

- Add tld in the release tarball
  ([`0c85581`](https://github.com/PrayTeam/scriptured-prayer/commit/0c85581833f341f3aaccfdf667e6c6e76798b246))

- Remove full path to poetry
  ([`d610ba4`](https://github.com/PrayTeam/scriptured-prayer/commit/d610ba43d1d17319a20a1f0a67875d64b11fddc2))


## v0.1.2 (2024-03-04)

### Continuous Integration

- Run semantic-release from poetry
  ([`e2efc75`](https://github.com/PrayTeam/scriptured-prayer/commit/e2efc75d309c0f42e0aaa41544da5ed82771420a))

- Run semantic-release publish with version
  ([`806ad25`](https://github.com/PrayTeam/scriptured-prayer/commit/806ad25f212a82e67ac2023536fb14358f753860))


## v0.1.1 (2024-03-04)

### Bug Fixes

- Include requirements file in release
  ([`4f8dbf9`](https://github.com/PrayTeam/scriptured-prayer/commit/4f8dbf92e415220bf90fba503a1f2e0f94bb8563))

- Replace github action for semantic-release with script
  ([`0c93006`](https://github.com/PrayTeam/scriptured-prayer/commit/0c9300672c39fd92b0907ff2b2ce758deec604bf))


## v0.1.0 (2024-03-04)

### Bug Fixes

- Add genre to load_cards
  ([`faeba52`](https://github.com/PrayTeam/scriptured-prayer/commit/faeba528a32c9c569f53d50281b78b6f2a1dbb74))

- Add missing local urls to CORS
  ([`8c1c78e`](https://github.com/PrayTeam/scriptured-prayer/commit/8c1c78e565bc0c36ed68d799a5a2612c07032ff1))

- Add missing README.md
  ([`4bdb331`](https://github.com/PrayTeam/scriptured-prayer/commit/4bdb3319b8404e625c5622d20379cc8326909d5a))

- Add regex replace to remove strong's numbers from verses
  ([#71](https://github.com/PrayTeam/scriptured-prayer/pull/71),
  [`f40d398`](https://github.com/PrayTeam/scriptured-prayer/commit/f40d3980e33ebd2132285d739ae2e7b66dac9daf))

* fix: add regex replace to remove strong's numbers from verses

* fix: fix error in regex string for strong's number removal

- Allow the admin and auth urls with the spa.
  ([`4f3f4e0`](https://github.com/PrayTeam/scriptured-prayer/commit/4f3f4e0f113a00c108fe7f0048e6a82b52f652eb))

- Apply correct vars per environment; improve django template usage
  ([`1914680`](https://github.com/PrayTeam/scriptured-prayer/commit/1914680a5cdccb69ece7989294f090757119b5bf))

- Card and usercard limit div by zero
  ([`9472405`](https://github.com/PrayTeam/scriptured-prayer/commit/94724055b9d8e0894822c740ab6b816acf0a3eb0))

- Correct argument assignment order in load_bible.py
  ([`88605ce`](https://github.com/PrayTeam/scriptured-prayer/commit/88605ce7ba3e754878549109c464738345eaad4a))

- Correct javascript urls to match new api routes
  ([`0496639`](https://github.com/PrayTeam/scriptured-prayer/commit/0496639126b007ebf32cb7e109b1e01431e6de7f))

- Correct missing style on deck
  ([`591c1f7`](https://github.com/PrayTeam/scriptured-prayer/commit/591c1f7df7be9df3bb0e9f4c0cb9ee26c7a15084))

- Correct visual oddities and make styles more mobile-friendly
  ([#79](https://github.com/PrayTeam/scriptured-prayer/pull/79),
  [`b7aabc5`](https://github.com/PrayTeam/scriptured-prayer/commit/b7aabc50e4437916f1b0848301efec856ffd2527))

- Give react router all urls not used in django
  ([`8bb5929`](https://github.com/PrayTeam/scriptured-prayer/commit/8bb5929e94c8c006bb2a000dea671b24d128b2b1))

- Install/build from scriptured-prayer-components subdir
  ([`9b178e4`](https://github.com/PrayTeam/scriptured-prayer/commit/9b178e4c878f16252ab7159fef227e29829a0f0f))

- Remove generic issue template
  ([`91568e9`](https://github.com/PrayTeam/scriptured-prayer/commit/91568e92e9884e84398f4d2695b401fc658dc71d))

- Remove unused .vite directory
  ([`f80ea36`](https://github.com/PrayTeam/scriptured-prayer/commit/f80ea3622abee787e6af16257d9586f605d7ff70))

- Remove unused assets and references
  ([`4218dd9`](https://github.com/PrayTeam/scriptured-prayer/commit/4218dd901f73e349b8e7428e4d35b390d8972d69))

- Resolve merge conflicts
  ([`e5f48cc`](https://github.com/PrayTeam/scriptured-prayer/commit/e5f48cc1157608b56202ab8861f316ed0fd52ebc))

- Resolve merge conflicts
  ([`8da8acf`](https://github.com/PrayTeam/scriptured-prayer/commit/8da8acf3e75a0fb60734712256cde0503a0d229f))

- Resolve tailwind typescript errors
  ([`ff18652`](https://github.com/PrayTeam/scriptured-prayer/commit/ff18652ee3d285ccd5654d6562adea4f2b3ebfc5))

- Schema generation
  ([`cfd82b2`](https://github.com/PrayTeam/scriptured-prayer/commit/cfd82b25b674e6da6029814f9cee9405732ed328))

- Switch cards request to use category id instead of name
  ([#80](https://github.com/PrayTeam/scriptured-prayer/pull/80),
  [`ccd654b`](https://github.com/PrayTeam/scriptured-prayer/commit/ccd654be57edeac20448e91159ad2c519106a163))

- Teh typo
  ([`61a0433`](https://github.com/PrayTeam/scriptured-prayer/commit/61a04338528fcfeb94ada4454fff5f728f9a8a3f))

- Use django.contrib.staticfiles
  ([`9435987`](https://github.com/PrayTeam/scriptured-prayer/commit/94359872a51e1001bb5b3ed5269ca0c55e907cfe))

- Use PAT as release token
  ([`c2e2391`](https://github.com/PrayTeam/scriptured-prayer/commit/c2e2391fcb210ae181936ab97832487b1887ee99))

### Chores

- Add conventional commit restrictions
  ([`885fa51`](https://github.com/PrayTeam/scriptured-prayer/commit/885fa51d59731018879245f5f0c5e0c873b2ad82))

- Add husky commit lint hook
  ([`a05b841`](https://github.com/PrayTeam/scriptured-prayer/commit/a05b84187a946978e57bb9ac26145fcf616cb741))

- Blacken the python code
  ([`9bb17b4`](https://github.com/PrayTeam/scriptured-prayer/commit/9bb17b4c32ed971553ddae5f0627874f38ccccc6))

- Remove DS_Store
  ([`f937367`](https://github.com/PrayTeam/scriptured-prayer/commit/f937367aa2c72034bde4d7e805c8729be8f9cc0d))

- Removes unused csrf endpoint
  ([`aa2653c`](https://github.com/PrayTeam/scriptured-prayer/commit/aa2653c93711efc1ebc4099eacb8ed8cda07bd2d))

- Set default throttling settings
  ([`e6e5d73`](https://github.com/PrayTeam/scriptured-prayer/commit/e6e5d734a14ecf476eec31a3e2a30e9434b641f4))

- Update django
  ([`396bc0a`](https://github.com/PrayTeam/scriptured-prayer/commit/396bc0a6f8e4548fee3afb61c7b4b87d5cd5b543))

- Update erd
  ([`cb7ab32`](https://github.com/PrayTeam/scriptured-prayer/commit/cb7ab32611e9849aa13489f70245d9dccf232671))

### Code Style

- Change keyword styling
  ([`389912b`](https://github.com/PrayTeam/scriptured-prayer/commit/389912b2146bcdd09aa00f347405a894748a9099))

Also a test commit

### Continuous Integration

- Initial build workflow
  ([`7969ad8`](https://github.com/PrayTeam/scriptured-prayer/commit/7969ad88076120d384debaf7c088659b36db6f9b))

### Features

- Add api documentation and add limits for cards/usercards
  ([`6751e17`](https://github.com/PrayTeam/scriptured-prayer/commit/6751e17ec1c84d6f1583e08c3029c202081674ed))

- Add cards api endpoint
  ([`0874419`](https://github.com/PrayTeam/scriptured-prayer/commit/0874419da8ba5fa3707ae6e915d42c2252f3675b))

- Add categories api engpoint
  ([`ee342eb`](https://github.com/PrayTeam/scriptured-prayer/commit/ee342ebd934cb77a00bf1343a921726da683f273))

- Add genre to categories
  ([`1e8118b`](https://github.com/PrayTeam/scriptured-prayer/commit/1e8118b43ad4b383aa6fe2c5f01e108d6c3b46a6))

- Add GitHub templates and contributing guidelines documentation
  ([`41050bb`](https://github.com/PrayTeam/scriptured-prayer/commit/41050bb017d9e0517149155cb23833253ac0f94d))

- Add improved visuals and routing for mvp pages
  ([`02cdc24`](https://github.com/PrayTeam/scriptured-prayer/commit/02cdc24f467573586fc94666e1c9b2c3ee64a1e9))

- Add instruction to CardAdmin
  ([`cc03d61`](https://github.com/PrayTeam/scriptured-prayer/commit/cc03d61a8d30c33cf3434d21dffdbfaea7e3e4e4))

- Add instruction to categories, cards and their serializers
  ([`7adb9f1`](https://github.com/PrayTeam/scriptured-prayer/commit/7adb9f18a3d02308239c8010f107719ac880ac25))

- Add instruction to translations
  ([`d7740a4`](https://github.com/PrayTeam/scriptured-prayer/commit/d7740a4e8bfa1719cf3ade0a2b921a5a707c306e))

- Add logout; refactor some styles
  ([`d780e55`](https://github.com/PrayTeam/scriptured-prayer/commit/d780e55d90c3acfb6876989753b9089e004d2fbd))

- Add README.md
  ([`61533cb`](https://github.com/PrayTeam/scriptured-prayer/commit/61533cb63a287348a666bacb3782de54ef631be7))

- Add routing; general cleanup
  ([`fb3ccd6`](https://github.com/PrayTeam/scriptured-prayer/commit/fb3ccd60cb8f2445de0827247b2630c10d58ae65))

- Create BaseViewSet for drf filters
  ([`2325ee7`](https://github.com/PrayTeam/scriptured-prayer/commit/2325ee7872b1a070bee292867624ae65ff8ddc0b))

- Integrate react app into django site
  ([`4064a46`](https://github.com/PrayTeam/scriptured-prayer/commit/4064a46297a4eb51debdf68728527318252835b6))

- Move scripture references to new table
  ([`41904c1`](https://github.com/PrayTeam/scriptured-prayer/commit/41904c17d253c5ee1ad1a80e32be8bfc9a6f4f70))

- Rudimentary authentication
  ([`517ff24`](https://github.com/PrayTeam/scriptured-prayer/commit/517ff24ea883f59906ce8e8fc454cc3f1755ab5e))

- Use category ID instead of name for card filter in api
  ([`54a99eb`](https://github.com/PrayTeam/scriptured-prayer/commit/54a99eb40b6ed1dcf6df73aedf7c1522a3d864b2))

### Refactoring

- Addresses review feedback for authentication
  ([`91ded6d`](https://github.com/PrayTeam/scriptured-prayer/commit/91ded6d815521a667ee3ed0e46ac5bec3ba79cbb))

- Rename spa-prototype to scriptured-prayer-components
  ([`a4c0925`](https://github.com/PrayTeam/scriptured-prayer/commit/a4c0925fccb3f848a09cb633843174b60b74f6f1))

- Switch to yarn
  ([`e758757`](https://github.com/PrayTeam/scriptured-prayer/commit/e758757b4a53c4579d2ef00f6852519450ac03e9))
