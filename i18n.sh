
# see:
# https://docusaurus.io/docs/i18n/introduction
# https://docusaurus.io/docs/cli#docusaurus-write-translations-sitedir

# ru

LOC="ru"

npm run write-translations -- --locale ${LOC}

mkdir -p i18n/${LOC}/docusaurus-plugin-content-docs/current
cp -r docs/** i18n/${LOC}/docusaurus-plugin-content-docs/current

mkdir -p i18n/${LOC}/docusaurus-plugin-content-blog
cp -r blog/** i18n/${LOC}/docusaurus-plugin-content-blog
