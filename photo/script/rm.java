import java.io.File;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.OpenOption;
import java.nio.file.Path;

public class rm {
    public static void main(String[] args) throws IOException {
        File dir = new File("/git/pamir2021/photo");
        String[] list = dir.list();
        String indexHtml = Files.readString(Path.of("/git/pamir2021/index.html"));
        for (String  day: list) {
            if(day.matches("\\d+")){
                File dayDir = new File(dir, day);
                String[] photoFiles = dayDir.list();
                for (String photoFile : photoFiles) {
                    String name = "photo/" + day + "/" + photoFile;
                    if(!indexHtml.contains(name)){
                        File file = new File(dayDir, photoFile);
                        file.delete();
                    }
                }

            }

        }
    }
}
