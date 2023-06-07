export let placementMode = false;
export let selectedTower = null;

const
  gameMenuCollectionButtons = document.querySelectorAll('.game-menu-collection [data-tower-id]'),
  towerFeaturesPopups = document.querySelectorAll('.tower-features-popup'),
  gameMenuTowerFeatures = document.querySelector('.game-menu-tower-features'),
  gameMenuWrapper = document.querySelector('.game-menu-wrapper'),
  gameMenuCollection = document.querySelector('.game-menu-collection'),
  gameMenuTarget = document.querySelector('.game-menu-target');

function clearActiveFromFeaturesPopups() {
  towerFeaturesPopups.forEach((towerFeaturesPopup) => {
    if (towerFeaturesPopup.classList.contains('_active')) {
      towerFeaturesPopup.classList.remove('_active');
    }
  });
}

gameMenuCollection.addEventListener('mouseleave', () => {
  if (gameMenuTowerFeatures.classList.contains('_active')) {
    gameMenuTowerFeatures.classList.remove('_active');
  }
});

gameMenuWrapper.addEventListener('mouseleave', () => {
  if (gameMenuCollection.classList.contains('_hover-active')) {
    gameMenuCollection.classList.remove('_hover-active');
  }
});

gameMenuCollectionButtons.forEach((gameMenuCollectionButton, type) => {
  const towerPopup = document.querySelector(`#${gameMenuCollectionButton.dataset.towerId}`);
  if (towerPopup) {
    gameMenuCollectionButton.addEventListener('mouseenter', () => {
      clearActiveFromFeaturesPopups();
      if (!gameMenuTowerFeatures.classList.contains('_active')) {
        gameMenuTowerFeatures.classList.add('_active');
      }
      towerPopup.classList.add('_active');
    });

    gameMenuCollectionButton.addEventListener('click', () => {
      clearActiveFromFeaturesPopups();
      setTimeout(() => placementMode = true, 0);
      if (placementMode) {
        placementMode = false;
        setTimeout(() => placementMode = true, 0);
      }
      selectedTower = type;
      gameMenuCollection.classList.remove('_hover-active');
      gameMenuCollection.classList.remove('_active');
      if (gameMenuTowerFeatures.classList.contains('_active')) {
        gameMenuTowerFeatures.classList.remove('_active');
      }
      towerPopup.classList.remove('_active');
    });
  }
});

gameMenuTarget.addEventListener('mouseenter', () => {
  gameMenuCollection.classList.add('_hover-active');
});

gameMenuTarget.addEventListener('click', () => {
  gameMenuCollection.classList.toggle('_active');
  placementMode = false;
});

document.querySelector('body').addEventListener('click', (event) => {
  if (!event.target.closest('.game-menu-collection') &&
    !event.target.closest('.game-menu-target')) {
    gameMenuCollection.classList.remove('_active');
  }
});
