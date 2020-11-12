
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries and resets ids
  return knex('sailorScouts')
    .truncate()
    .then(function() {
      return knex('sailorScouts').insert([
        { name: 'Usagi Tsukino' },
        { name: 'Ami Mizuno' },
        { name: 'Rei Hino' },
        { name: 'Makoto Kino' },
        { name: 'Minako Aino' },
      ]);
    });
};
