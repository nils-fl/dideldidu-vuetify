<template>
    <v-footer absolute="true" app class="footer">
      <span class="footerele">Nils Flaschel &copy; 2018</span>
      <v-spacer></v-spacer>
      <v-dialog v-model="dialog" max-width="95%">
        <a slot="activator" class="footerele">Datenschutz</a>
        <v-card style="padding:25px">
          <v-card-title class="headline">Datenschutz</v-card-title>
          <v-card-text>
            <h1>Datenschutzerklärung</h1>
              <p>Verantwortliche Stelle im Sinne der Datenschutzgesetze, insbesondere der EU-Datenschutzgrundverordnung (DSGVO), ist:</p>
              <p>Nils Flaschel</p>
              <h2>Ihre Betroffenenrechte</h2>
              <p>Unter den angegebenen Kontaktdaten unseres Datenschutzbeauftragten können Sie jederzeit folgende Rechte ausüben:</p>
              <ul>
              <li>Auskunft über Ihre bei uns gespeicherten Daten und deren Verarbeitung,</li>
              <li>Berichtigung unrichtiger personenbezogener Daten,</li>
              <li>Löschung Ihrer bei uns gespeicherten Daten,</li>
              <li>Einschränkung der Datenverarbeitung, sofern wir Ihre Daten aufgrund gesetzlicher Pflichten noch nicht löschen dürfen,</li>
              <li>Widerspruch gegen die Verarbeitung Ihrer Daten bei uns und</li>
              <li>Datenübertragbarkeit, sofern Sie in die Datenverarbeitung eingewilligt haben oder einen Vertrag mit uns abgeschlossen haben.</li>
              </ul>
              <p>Sofern Sie uns eine Einwilligung erteilt haben, können Sie diese jederzeit mit Wirkung für die Zukunft widerrufen.</p>
              <p>Sie können sich jederzeit mit einer Beschwerde an die für Sie zuständige Aufsichtsbehörde wenden. Ihre zuständige Aufsichtsbehörde richtet sich nach dem Bundesland Ihres Wohnsitzes, Ihrer Arbeit oder der mutmaßlichen Verletzung. Eine Liste der Aufsichtsbehörden (für den nichtöffentlichen Bereich) mit Anschrift finden Sie unter: <a href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html" target="_blank" rel="noopener">https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html</a>.</p>
              <h2>Zwecke der Datenverarbeitung durch die verantwortliche Stelle und Dritte</h2>
              <p>Wir verarbeiten Ihre personenbezogenen Daten nur zu den in dieser Datenschutzerklärung genannten Zwecken. Eine Übermittlung Ihrer persönlichen Daten an Dritte zu anderen als den genannten Zwecken findet nicht statt. Wir geben Ihre persönlichen Daten nur an Dritte weiter, wenn:</p>
              <ul>
              <li>Sie Ihre ausdrückliche Einwilligung dazu erteilt haben,</li>
              <li>die Verarbeitung zur Abwicklung eines Vertrags mit Ihnen erforderlich ist,</li>
              <li>die Verarbeitung zur Erfüllung einer rechtlichen Verpflichtung erforderlich ist,</li>
              </ul>
              <p>die Verarbeitung zur Wahrung berechtigter Interessen erforderlich ist und kein Grund zur Annahme besteht, dass Sie ein überwiegendes schutzwürdiges Interesse an der Nichtweitergabe Ihrer Daten haben.</p>
              <h2>Löschung bzw. Sperrung der Daten</h2>
              <p>Wir halten uns an die Grundsätze der Datenvermeidung und Datensparsamkeit. Wir speichern Ihre personenbezogenen Daten daher nur so lange, wie dies zur Erreichung der hier genannten Zwecke erforderlich ist oder wie es die vom Gesetzgeber vorgesehenen vielfältigen Speicherfristen vorsehen. Nach Fortfall des jeweiligen Zweckes bzw. Ablauf dieser Fristen werden die entsprechenden Daten routinemäßig und entsprechend den gesetzlichen Vorschriften gesperrt oder gelöscht.</p>
              <h2>Kontaktformular</h2>
              <p>Treten Sie bzgl. Fragen jeglicher Art per E-Mail oder Kontaktformular mit uns in Kontakt, erteilen Sie uns zum Zwecke der Kontaktaufnahme Ihre freiwillige Einwilligung. Hierfür ist die Angabe einer validen E-Mail-Adresse erforderlich. Diese dient der Zuordnung der Anfrage und der anschließenden Beantwortung derselben. Die Angabe weiterer Daten ist optional. Die von Ihnen gemachten Angaben werden zum Zwecke der Bearbeitung der Anfrage sowie für mögliche Anschlussfragen gespeichert. Nach Erledigung der von Ihnen gestellten Anfrage werden personenbezogene Daten automatisch gelöscht.</p>
              <h2>Verwendung von Scriptbibliotheken (Google Webfonts)</h2>
              <p>Um unsere Inhalte browserübergreifend korrekt und grafisch ansprechend darzustellen, verwenden wir auf dieser Website Scriptbibliotheken und Schriftbibliotheken wie z. B. Google Webfonts (<a href="http://www.google.com/webfonts/" target="_blank" rel="noopener">https://www.google.com/webfonts/</a>). Google Webfonts werden zur Vermeidung mehrfachen Ladens in den Cache Ihres Browsers übertragen. Falls der Browser die Google Webfonts nicht unterstützt oder den Zugriff unterbindet, werden Inhalte in einer Standardschrift angezeigt.</p>
              <p>Der Aufruf von Scriptbibliotheken oder Schriftbibliotheken löst automatisch eine Verbindung zum Betreiber der Bibliothek aus. Dabei ist es theoretisch möglich – aktuell allerdings auch unklar ob und ggf. zu welchen Zwecken – dass Betreiber entsprechender Bibliotheken Daten erheben.</p>
              <p>Die Datenschutzrichtlinie des Bibliothekbetreibers Google finden Sie hier: <a href="https://www.google.com/policies/privacy/" target="_blank" rel="noopener">https://www.google.com/policies/privacy/</a></p>
              <h2>Verwendung von Google Maps</h2>
              <p>Diese Webseite verwendet Google Maps API, um geographische Informationen visuell darzustellen. Bei der Nutzung von Google Maps werden von Google auch Daten über die Nutzung der Kartenfunktionen durch Besucher erhoben, verarbeitet und genutzt. Nähere Informationen über die Datenverarbeitung durch Google können Sie <a href="http://www.google.com/privacypolicy.html" target="_blank" rel="noopener">den Google-Datenschutzhinweisen</a> entnehmen. Dort können Sie im Datenschutzcenter auch Ihre persönlichen Datenschutz-Einstellungen verändern.</p>
              <p>Ausführliche Anleitungen zur Verwaltung der eigenen Daten im Zusammenhang mit Google-Produkten<a href="http://www.dataliberation.org/" target="_blank" rel="noopener"> finden Sie hier</a>.</p>
              <h2><strong>Änderung unserer Datenschutzbestimmungen</strong></h2>
              <p>Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen, z.B. bei der Einführung neuer Services. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.</p>
              <h2><strong>Fragen an den Datenschutzbeauftragten</strong></h2>
              <p>Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine E-Mail oder wenden Sie sich direkt an die für den Datenschutz verantwortliche Person in unserer Organisation:</p>
              <p><em>Die Datenschutzerklärung wurde mit dem </em><a href="https://www.activemind.de/datenschutz/datenschutzhinweis-generator/" target="_blank" rel="noopener"><em>Datenschutzerklärungs-Generator der activeMind AG erstellt</em></a><em>.</em></p>
          </v-card-text>
        </v-card>
      </v-dialog>
      <v-dialog v-model="dialog" max-width="290">
        <a slot="activator" class="footerele">Impressum</a>
        <v-card>
          <v-card-title class="headline">Impressum</v-card-title>
          <v-card-text>
            Nils Flaschel<br />
            Kottwitzstraße 35<br />
            20253 Hamburg<br />
            dideldidu.hh@gmail.com
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-footer>
</template>

<script>
export default {
  data () {
    return {
        titel: 'Dideldidu'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer {
  height: 24px !important;
  padding-left: 10px;
  background-color: #dfe6e9 !important;
  color: #2d3436 !important;
}
.footerele {
  padding-left: 15px !important;
  padding-right: 15px !important;
  background-color: #dfe6e9 !important;
  color: #2d3436 !important;
}
</style>
